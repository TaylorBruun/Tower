import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildTestComponent } from './wild-test.component';

describe('WildTestComponent', () => {
  let component: WildTestComponent;
  let fixture: ComponentFixture<WildTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
