import { Component } from '@angular/core';
import { EventFormData } from 'src/app/Interfaces/event-form-data';
import { NgForm, NgModel } from '@angular/forms';
import { AppState } from 'src/app/app-state';
import { EventsService } from 'src/app/Services/events-service.service';
import { TowerEvent } from 'src/app/Interfaces/event';
import { FormValidationService } from 'src/app/Services/form-validation.service';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.css']
})
export class EventFormComponent {

  locationError: string = ''

  
  constructor(public formValidationService: FormValidationService, private eventsService: EventsService, public appState: AppState) {
    
  }
  
  originalEventFormData: EventFormData = {
    name: '',
    description: '',
    coverImg: '',
    location: '',
    capacity: 0,
    startDate: new Date(),
    type: ''
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
        
      },
      error(error) {
        console.log('error from create event observable', error);
        alert(error.error.error.message)
      },
    })
  }

}
