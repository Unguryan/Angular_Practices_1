import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class FitnesBackgroundService implements InMemoryDbService {

  constructor() { }

  createDb(){
    let items = [
      {id: 1, name: "Test 1"},
      {id: 2, name: "Test 2"},
      {id: 3, name: "Test 3"}
    ];

    console.log(items);

    return { items };
  }
}
