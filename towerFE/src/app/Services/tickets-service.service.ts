import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../app-state';
import { constants } from '../constants';
import { Ticket } from '../Interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
 

  constructor(private http: HttpClient, public appState: AppState) { }

  createTicket(ticketData: {eventId: string, userId: string}) {
    this.http.post(`${constants.baseURL}api/tickets`, ticketData).subscribe({
      next: res => {
        this.appState.currTickets.push(res as Ticket)
      }
    })   
  }

  getEventTickets(eventId: string): Observable<any> {
    return this.http.get(`${constants.baseURL}api/events/${eventId}/tickets`)
  }

  getMyTickets(): Observable<any> {
    return this.http.get(`${constants.baseURL}account/tickets`)
  }

  deleteTicket(ticketId: string) {
    this.http.delete(`${constants.baseURL}api/tickets/${ticketId}`).subscribe()
  }
}
