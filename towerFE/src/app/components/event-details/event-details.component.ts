import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AppState } from 'src/app/app-state';
import { TowerEvent } from 'src/app/Interfaces/event';
import { EventsService } from 'src/app/Services/events-service.service';
import { TicketsService } from 'src/app/Services/tickets-service.service';
import { TicketHolderComponent } from '../ticket-holder/ticket-holder.component';




@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  
  selectedEvent!: TowerEvent
  selectedId = this.route.snapshot.paramMap.get('id') || ''
  
  constructor(private ticketsService: TicketsService, public auth: AuthService, private eventsService: EventsService, public appState: AppState, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe({
      next: res => {
        this.appState.events = res
        this.selectedEvent = res.find((event: TowerEvent) => event.id === this.selectedId)
      }
    })
    this.ticketsService.getEventTickets(this.selectedId).subscribe({
      next: res => {
        this.appState.currTickets = res
      }
    })
    this.eventsService.getEventById(this.selectedId).subscribe({
      error: error => {
        console.log(error);
        alert('Invalid event ID')
        this.router.navigate([''])
      }
    })
  }


  createTicket(eventId: string) {
    let ticketData = {
      eventId: '',
      userId: ''
    }
    ticketData.eventId = eventId
    ticketData.userId = this.appState.user.id
    this.ticketsService.createTicket(ticketData)
  }
  
  deleteTicket(){
    let foundTicket = this.appState.currTickets.find(ticket => (ticket.accountId == this.appState.user.id) && (ticket.eventId == this.selectedEvent.id))
    if (foundTicket?.id){
      this.ticketsService.deleteTicket(foundTicket.id)
      // NOTE the '=' is used even though filter is a mutating method because it causes angular to reactively update the page
      this.appState.currTickets = this.appState.currTickets.filter(ticket => !(ticket.id == foundTicket!.id))
    } else {
      console.error('No ticket with that ID')
    }
  }

  getCancelMessage(): string {
    return this.selectedEvent.isCanceled ? `It's canceled :(` : `It's on!`
  }

  alreadyAttending(): boolean {
    let userIdsAttendingEvent: string[] = []
    let userId = this.appState.user?.id
    this.appState.currTickets.forEach(ticket => userIdsAttendingEvent.push(ticket.accountId));
    return userIdsAttendingEvent.includes(userId)
  }


}
