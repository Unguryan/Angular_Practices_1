import { Component, OnInit } from '@angular/core';
import { FitnesService } from '../index';

@Component({
  selector: 'app-fitnes-container',
  templateUrl: './fitnes-container.component.html',
  styleUrls: ['./fitnes-container.component.css']
})
export class FitnesContainerComponent implements OnInit{

  constructor(private service : FitnesService){
  }

  addingItemName : string;

  activities : any;

  ngOnInit(){
    this.UpdateView();
  }

  private UpdateView(){
    this.service.GetAsync().subscribe(res => {
      this.activities = res;
      this.addingItemName = "";
    });
  }

  AddActivityEventHanlder(){
    console.log(this.addingItemName);

    this.service.AddNewItemAsync(this.addingItemName).subscribe( res =>{
      console.log(res);
      this.UpdateView();
    });
  }

  ChangeActivityHandler(event: any){
    console.log(event);
    this.service.ChangeItemAsync(event).subscribe(res =>{
      console.log(res);
      this.UpdateView();
    });
  }

  RemoveActivityHandler(event: any){
    console.log(event);

    this.service.RemoveItemAsync(event).subscribe(res =>{
      console.log(res);
      this.UpdateView();
    });
  }

}
