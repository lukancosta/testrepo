import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActiveTripCardComponent } from './dashboard/active-trip-card/active-trip-card.component';
import { NewTripFormComponent } from './new-trip-form/new-trip-form.component';
import { CreateNewTripPlanButtonComponent } from './dashboard/create-new-trip-plan-button/create-new-trip-plan-button.component';
import { OldTripCardComponent } from './dashboard/old-trip-card/old-trip-card.component';

import {getTrip} from './getTrip.service';
import { Router, RouterModule, Routes } from '@angular/router';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';

//This is the route array
const appRoutes: Routes = [
  {path:'', component: DashboardComponent}, //--> change the path to 'dashboard' once the login is created
  {path:'create', component: NewTripFormComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ActiveTripCardComponent,
    NewTripFormComponent,
    CreateNewTripPlanButtonComponent,
    OldTripCardComponent,
    BreadcrumbComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgSelectModule,
    FormsModule
  ],
  providers: [getTrip,],
  bootstrap: [AppComponent]
})
export class AppModule { }
