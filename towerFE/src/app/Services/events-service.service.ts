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

  getEvents(query: string = ''): Observable<any> {
    return this.http.get(`${constants.baseURL}api/events/${query}`)
  }

  createEvent(eventData: {}): Observable<any> {
    return this.http.post(`${constants.baseURL}api/events`, eventData)
  }

  getEventsForMyTickets() {
    let eventIds: string[] = []
    this.appState.myTickets.forEach(ticket => eventIds.push(ticket.eventId))
    this.appState.eventsAttending = this.appState.events.filter(event => eventIds.includes(event.id))
    console.log('eventIds:', eventIds);
    console.log('eventsAttending:', this.appState.eventsAttending);
    
    
  }

}
