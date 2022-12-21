import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs'

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

}
