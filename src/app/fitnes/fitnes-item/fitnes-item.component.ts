import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fitnes-item',
  templateUrl: './fitnes-item.component.html',
  styleUrls: ['./fitnes-item.component.css']
})
export class FitnesItemComponent {

  @Input('act')
  activity : any;

  @Output('changeActivityEvent')
  changeNameEvent = new EventEmitter<any>();

  @Output('removeActivityEvent')
  removeActivityEvent = new EventEmitter<number>();

  tougle : boolean = false;
  newName : string;
  
  ChangeActivity(){
    this.tougle = !this.tougle;
    this.newName = this.activity.name;
  }

  ChangeNameEvent(){
    this.changeNameEvent.emit(
      {
        id : this.activity.id,
        newName: this.newName
    });
  }

  RemoveActivity(){
    this.removeActivityEvent.emit(this.activity.id);
  }

}
