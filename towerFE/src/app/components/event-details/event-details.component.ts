import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppState } from 'src/app/app-state';
import { TowerEvent } from 'src/app/Interfaces/event';
import { EventsService } from 'src/app/Services/events-service.service';




@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  
  selectedEvent!: TowerEvent
  
  constructor(private eventsService: EventsService, public appState: AppState, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.eventsService.getEvents().subscribe({
      next: res => {
        this.appState.events = res
        const selectedId = this.route.snapshot.paramMap.get('id')
        this.selectedEvent = res.find((event: TowerEvent) => event.id === selectedId)
      }
    })
  }

  createTicket(eventId: string) {
    throw new Error("Method not implemented");
  }

  getCancelMessage(): string {
    return this.selectedEvent.isCanceled ? `It's canceled :(` : `It's on!`
  }


}
