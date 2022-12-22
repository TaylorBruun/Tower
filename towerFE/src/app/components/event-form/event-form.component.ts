import { Component } from '@angular/core';
import { eventType } from "../../app-state";
import { EventFormData } from 'src/app/Interfaces/event-form-data';
import { NgForm, NgModel } from '@angular/forms';
import { AppState } from 'src/app/app-state';
import { EventsService } from 'src/app/Services/events-service.service';
import { TowerEvent } from 'src/app/Interfaces/event';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {

  constructor(private eventsService: EventsService, public appState: AppState) {

  }

  originalEventFormData: EventFormData = {
    name: '',
    description: '',
    coverImg: '',
    location: '',
    capacity: 0,
    startDate: new Date(),
    type: eventType.concert 
  }

  eventFormData: EventFormData = {...this.originalEventFormData}

  createEvent(form: NgForm) {
    console.log("form.form.value from createEvent submission:", form.form.value);
    let eventData = form.form.value
    let newEvent: TowerEvent
    this.eventsService.createEvent(eventData).subscribe({
      next: event => {
        newEvent = event
        console.log('here is event from create event subscribe in form:', newEvent);
        this.appState.events.unshift(newEvent)
        console.log('here is appstate events after unshift:', this.appState.events);
        
      }
    })
  }

}
