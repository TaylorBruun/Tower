import { Injectable } from '@angular/core';
import { TowerEvent } from './Interfaces/event';
import { Ticket } from './Interfaces/ticket';
import { Comment } from './Interfaces/comment';
import { constants } from "./constants";

@Injectable({
  providedIn: 'root'
})
export class AppState {


  user: any
  account = {}
  events: TowerEvent[] = []
  comments: Comment[] = []
  currTickets: Ticket[] = []
  eventsAttending: TowerEvent[] = []
  myTickets: Ticket[] = []

  eventTypes: string[] = this.buildEventTypeNames()


  constructor() { }

  buildEventTypeNames(): string[] {
    let types: string[] = []
   constants.eventTypes.forEach(type =>{
      types.push(type)
   })
    return types
  }

  
}

