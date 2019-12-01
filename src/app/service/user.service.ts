import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsermyfireService {

  constructor() { }
  set(getDataFromDatabase){
    localStorage.setItem('user',JSON.stringify(getDataFromDatabase))
  }
  destory(){
    localStorage.removeItem('user');
  }
}
