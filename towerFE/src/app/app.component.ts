import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { AppState } from './app-state';
import { AccountService } from './Services/account-service.service';
import { EventsService } from './Services/events-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor (private eventsService: EventsService, public appState: AppState, private auth: AuthService, private accountService: AccountService) {  }

  ngOnInit(): void {
    if (this.auth.isAuthenticated$) {
      this.accountService.getAccount().subscribe({
        next: res => {
          this.appState.user = res         
        }
      })
    }
    this.eventsService.getEvents().subscribe({
      next: res => {
        this.appState.events = res
        
        
        if (!this.appState.displayedEvents.length) {
          this.appState.displayedEvents = res
        }
      },
      error(err) {
        console.log(err);
      },
    })
  }

  title = 'towerFE';

}
