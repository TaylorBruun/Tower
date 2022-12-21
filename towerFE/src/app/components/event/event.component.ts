import { Component, Input } from '@angular/core';
import { Event } from 'src/app/Interfaces/event';
import { EventsService } from 'src/app/Services/events-service.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent {
  @Input() event!: Event

  formatDate(rawDate: Date) {
    return new Date(rawDate).toLocaleDateString()
  }

  selectEvent() {

  }

  deleteTicket(eventId: number){
    
  }

}
