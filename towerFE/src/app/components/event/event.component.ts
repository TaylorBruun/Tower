import { Component, Input } from '@angular/core';
import { TowerEvent } from 'src/app/Interfaces/event';
import { EventsService } from 'src/app/Services/events-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})

export class EventComponent {
  @Input() event!: TowerEvent

  selectedId!: number

  constructor(private route: ActivatedRoute) {

  }

  formatDate(rawDate: Date) {
    return new Date(rawDate).toLocaleDateString()
  }

  selectEvent() {

  }

  deleteTicket(eventId: number){
    
  }

}
