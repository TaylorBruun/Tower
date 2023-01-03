import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AppState } from 'src/app/app-state';
import { Ticket } from 'src/app/Interfaces/ticket';
import { EventsService } from 'src/app/Services/events-service.service';
import { TicketsService } from 'src/app/Services/tickets-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

 

  constructor(private eventsService: EventsService, public appState: AppState, private ticketsService: TicketsService, public auth: AuthService) { }

  ngOnInit(): void {
    this.ticketsService.getMyTickets().subscribe({
      next: res => {
          this.appState.myTickets = res as Ticket[]
          this.eventsService.getEventsForMyTickets()
      }
    })
  }




}
