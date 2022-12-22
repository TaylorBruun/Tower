import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppState {

  user = {}
  account = {}
  events = []
  comments = []
  currTickets = []
  eventsAttending = []
  myTickets = []

  eventTypes: string[] = []

  constructor() { }
}
