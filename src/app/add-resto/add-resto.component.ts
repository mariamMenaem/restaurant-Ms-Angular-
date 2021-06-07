import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms';
import { from } from 'rxjs';
import {ListRestoService} from '../list-resto.service';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.scss']
})
export class AddRestoComponent implements OnInit {
  alert:boolean = false;
  addResto= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })
  constructor(private add:ListRestoService) { }

  ngOnInit(): void {
  }
  collectResto(){
    this.add.saveResto(this.addResto.value).subscribe(()=>{
      this.alert = true;
      this.addResto.reset({});
    })
  }
  closeAlert(){
    this.alert = false;
  }


}
