import { Component, Input } from '@angular/core';
import { AppState } from 'src/app/app-state';


@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.css']
})
export class FilterButtonComponent {
  @Input() type!: string

  constructor(public appState: AppState) { }

  filterEvents(filterString: string) {
    if (!this.appState.eventTypes.includes(filterString)) {
      this.appState.displayedEvents = this.appState.events
    } 
    else {
      this.appState.displayedEvents = this.appState.events.filter(event => event.type == filterString)
    }
  }

}
