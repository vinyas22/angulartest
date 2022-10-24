import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }
  todaydate(){
    let date=new Date();
    return  date
  }
  maps(){

    let map=new Map()
    return map
  }
getallusers():Observable<User[]>{
  return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
}
}
