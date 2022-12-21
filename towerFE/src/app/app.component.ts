import { Component } from '@angular/core';
import { EventsService } from './Services/events-service.service';
import { AuthService } from "@auth0/auth0-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user = {}
  account = {}
  events = []
  comments = []
  currTickets = []
  eventsAttending = []
  myTickets = []
  
  constructor(public auth: AuthService, private eventsService: EventsService) {

  }

  onClick() {
    this.eventsService.getEvents().subscribe({
      next: res => {
        console.log('res: ', res);
        this.events = res
              
      }
    })

  }


  title = 'towerFE';

}
