import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms';
import{UsersService} from '../users.service'
import { from } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  alert:boolean = false;
  addUser= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private user:UsersService) { }

  ngOnInit(): void {
  }
  collectUsers(){
    this.user.addUser(this.addUser.value).subscribe((result)=>{
      console.log(result);
      
    });
  }
  closeAlert(){
    this.alert = false;
  }


}
