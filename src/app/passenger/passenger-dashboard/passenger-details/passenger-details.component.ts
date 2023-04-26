import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ipassenger } from 'src/app/shared/model/passenger';
import { PassengerService } from 'src/app/shared/services/passenger.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.scss']
})
export class PassengerDetailsComponent implements OnInit {
  @Input() passObj ! : Ipassenger;
  @Output() emitpassInfo : EventEmitter<Ipassenger> = new EventEmitter<Ipassenger>()
  isEditable  : boolean = false;
  constructor(private _passengerService : PassengerService) { }

  ngOnInit(): void {
  }

  onDone(pname : string){
    this.isEditable = !this.isEditable;
    this._passengerService.updatePassengerFullname(this.passObj.id, pname)
  }

  onRemove(){
    this._passengerService.removePassenger(this.passObj.id, this.passObj.fullname)
    this.emitpassInfo.emit(this.passObj)
  }

}
