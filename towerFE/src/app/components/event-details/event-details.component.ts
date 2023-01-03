import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AppState } from 'src/app/app-state';
import { TowerEvent } from 'src/app/Interfaces/event';
import { EventsService } from 'src/app/Services/events-service.service';
import { TicketsService } from 'src/app/Services/tickets-service.service';




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

  getCancelMessage(): string {
    return this.selectedEvent.isCanceled ? `It's canceled :(` : `It's on!`
  }


}
