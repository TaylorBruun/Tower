import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppState } from 'src/app/app-state';
import { EventsService } from 'src/app/Services/events-service.service';

import { EventFormComponent } from './event-form.component';
import { instance } from "testdouble";

describe('EventFormComponent', () => {
  let component: EventFormComponent;
  let fixture: ComponentFixture<EventFormComponent>;
  let eventsService: EventsService

  beforeEach(async () => {

    eventsService = instance()

    await TestBed.configureTestingModule({
      declarations: [ EventFormComponent ],
      providers: [
        AppState,
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
