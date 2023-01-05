import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constants } from "../constants";
import { Observable } from "rxjs";
import { TowerEvent } from '../Interfaces/event';
import { AppState } from '../app-state';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  
 


  constructor(public appState: AppState, private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get(`${constants.baseURL}api/events/`)
  }

  getEventById(eventId: string): Observable<any> {
    return this.http.get(`${constants.baseURL}api/events/${eventId}`)
  }

  createEvent(eventData: {}): Observable<any> {
    return this.http.post(`${constants.baseURL}api/events`, eventData)
  }

  getEventsForMyTickets() {
    let eventIds: string[] = []
    this.appState.myTickets.forEach(ticket => eventIds.push(ticket.eventId))
    this.appState.eventsAttending = this.appState.events.filter(event => eventIds.includes(event.id))
  }


  

}
