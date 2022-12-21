import { Component } from '@angular/core';
import { EventsService } from '../../Services/events-service.service';
import { AuthService } from "@auth0/auth0-angular";
import { eventType } from "../../Interfaces/event";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  user = {}
  account = {}
  events = []
  comments = []
  currTickets = []
  eventsAttending = []
  myTickets = []

  eventTypes: string[] = []
  
  constructor(public auth: AuthService, private eventsService: EventsService) {
    for(let type in eventType){
      if (isNaN(Number(type))){
        this.eventTypes.push(type)
      }
    }
  }

  onClick() {
    this.eventsService.getEvents().subscribe({
      next: res => {
        console.log('res: ', res);
        this.events = res
              
      }
    })

  }

}
