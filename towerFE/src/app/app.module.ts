import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { EventComponent } from './components/event/event.component';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { AccountComponent } from './components/account/account.component';
import { CommentComponent } from './components/comment/comment.component';
import { TicketHolderComponent } from './components/ticket-holder/ticket-holder.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { WildTestComponent } from './components/wild-test/wild-test.component';
import { EventFormComponent } from './components/event-form/event-form.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    AuthButtonComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    AccountComponent,
    CommentComponent,
    TicketHolderComponent,
    EventDetailsComponent,
    WildTestComponent,
    EventFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({
      domain: 'dev-9b4l8l0z.us.auth0.com',
      clientId: 'I4Pt8FlULkBPFovOcWdDDZSqO1uDJDQa',
      audience: 'https://TayDev.com',
      scope: 'read:current_user',
      httpInterceptor: {
        allowedList: [{
          uri: 'http://localhost:3000/*',
          tokenOptions: {
            audience: 'https://TayDev.com',
            scope: 'read:current_user'
          }
      }]
      }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
