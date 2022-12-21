import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { CanActivateAccountGuard } from './guards/can-activate-account.guard';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'account', component: AccountComponent, canActivate: [CanActivateAccountGuard]},
  {path: '', component: HomeComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
