import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FitnesService {

  constructor(private http: HttpClient) { }

  GetAsync(){
    return this.http.get('/api/items');
  }

  AddNewItemAsync(name: string){
    return this.http.post('/api/items', {name: name});
  }

  ChangeItemAsync(activity: any){
    return this.http.put(`/api/items/${activity.id}`, {id: activity.id, name: activity.newName});
  }

  RemoveItemAsync(id: number){
    return this.http.delete(`/api/items/${id}`);
  }
}
