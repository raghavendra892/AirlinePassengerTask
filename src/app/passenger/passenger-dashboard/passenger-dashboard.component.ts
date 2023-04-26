import { Component, Input, OnInit } from '@angular/core';
import { Ipassenger } from 'src/app/shared/model/passenger';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  
  passengerArray1 : Array<Ipassenger> = []
  checkedInCount ! : number
  constructor(private _passengerService : PassengerService) { }

  ngOnInit(): void {
     this.passengerArray1 = this._passengerService.getAllPassengers()
    
    //this.checkedInCount = this.passengerArray1.filter(pass => pass.checkedIn === true).length
    this.checkedInCount = this.passengerArray1.filter(pass => pass.checkedIn).length
    
  }

  onRemoveUpdate(eve : any){
    this.checkedInCount = this.passengerArray1.filter(pass => pass.checkedIn).length

  }

}
