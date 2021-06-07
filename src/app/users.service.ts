import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url ="http://localhost:3000/users";
  constructor(private http:HttpClient) { }
  addUser(data){
    return this.http.post(this.url , data);
  }
}
