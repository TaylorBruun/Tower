import { Injectable } from '@angular/core';
import { TowerEvent } from './Interfaces/event';
import { Ticket } from './Interfaces/ticket';
import { Comment } from './Interfaces/comment';

@Injectable({
  providedIn: 'root'
})
export class AppState {


  user = {}
  account = {}
  events: TowerEvent[] = []
  comments: Comment[] = []
  currTickets: Ticket[] = []
  eventsAttending: TowerEvent[] = []
  myTickets: Ticket[] = []

  eventTypes: string[] = this.buildEventTypeNames()


  constructor() { }

  buildEventTypeNames(): string[] {
    let types = []
    for (let type in eventType) {
      if (isNaN(Number(type))) {
        types.push(type)
      }
    }
    return types
  }

  
}

export enum eventType { 'concert', 'convention', 'sport', 'digital' }
