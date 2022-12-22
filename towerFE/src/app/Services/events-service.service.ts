import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { TowerEvent } from '../Interfaces/event';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  baseURL = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getEvents(query: string = ''): Observable<any> {
    console.log('firing getEvents from eventsService');
    return this.http.get(`${this.baseURL}api/events/${query}`)
  }

  createEvent(eventData: {}): Observable<any> {
    console.log('firing createEvent from eventsService with this data:', eventData);
    return this.http.post(`${this.baseURL}api/events`, eventData)
  }

}
