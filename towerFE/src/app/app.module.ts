import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { EventComponent } from './components/event/event.component';
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';


@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    AuthButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-9b4l8l0z.us.auth0.com',
      clientId: 'I4Pt8FlULkBPFovOcWdDDZSqO1uDJDQa'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
