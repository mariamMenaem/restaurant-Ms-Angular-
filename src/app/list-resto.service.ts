import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ListRestoService {
  url ="http://localhost:3000/restaurant";
  constructor(private http:HttpClient) { }
  getList(){
    console.warn("somedata");
    return this.http.get(this.url);
  }
  saveResto(data){
    return this.http.post(this.url, data);
  }
  delResto(id){
    return this.http.delete(`${this.url}/${id}`);
  }
  getOneResto(id){
    return this.http.get(`${this.url}/${id}`);
  }
  updateResto(id , data){
    return this.http.put(`${this.url}/${id}` , data);
  }
}
