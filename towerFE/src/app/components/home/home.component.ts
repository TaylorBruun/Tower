import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../Services/events-service.service';
import { AuthService } from "@auth0/auth0-angular";
import { AppState } from 'src/app/app-state';
import { AccountService as AccountService } from 'src/app/Services/account-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(public auth: AuthService, private accountService: AccountService, private eventsService: EventsService, public appState: AppState) {

  }

  ngOnInit() {


  }

  onClick() {
    this.appState.displayedEvents.reverse()


  }

}
