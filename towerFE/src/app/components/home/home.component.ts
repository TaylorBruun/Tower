import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../Services/events-service.service';
import { AuthService } from "@auth0/auth0-angular";
import { AppState } from 'src/app/app-state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 
  
  constructor(public auth: AuthService, private eventsService: EventsService, public appState: AppState) {
    
  }

  ngOnInit() {
    // this.eventsService.getEvents().subscribe({
    //   next: res => {
    //     console.log('res: ', res);
    //     this.events = res
    //   }
    // })
  }

  onClick() {
    this.eventsService.getEvents().subscribe({
      next: res => {
        this.appState.events = res
      }
    })

  }

}
