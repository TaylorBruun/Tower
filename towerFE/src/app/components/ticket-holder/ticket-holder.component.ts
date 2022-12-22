import { Component, Input } from '@angular/core';
import { Ticket } from 'src/app/Interfaces/ticket';

@Component({
  selector: 'app-ticket-holder',
  templateUrl: './ticket-holder.component.html',
  styleUrls: ['./ticket-holder.component.css']
})
export class TicketHolderComponent {
  @Input() ticket!: Ticket

}
