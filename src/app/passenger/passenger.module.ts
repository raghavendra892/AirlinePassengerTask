import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component';
import { PassengerCountComponent } from './passenger-dashboard/passenger-count/passenger-count.component';
import { PassengerDetailsComponent } from './passenger-dashboard/passenger-details/passenger-details.component';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailsComponent,
    
  ],
  imports: [
    
    CommonModule,MaterialModule
  ],
  exports : [PassengerDashboardComponent]
})
export class PassengerModule { }
