import { Component, OnInit } from '@angular/core';
import {FormGroup , FormControl} from '@angular/forms';
import { from } from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {ListRestoService} from '../list-resto.service'
@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.scss']
})
export class UpdateRestoComponent implements OnInit {
  editResto= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  })
  constructor(private route:ActivatedRoute , private resto:ListRestoService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params.id);
    this.resto.getOneResto(this.route.snapshot.params.id).subscribe((result)=>{
      console.log("edit one : " , result);
      this.editResto= new FormGroup({
        name: new FormControl(result["name"]),
        email: new FormControl(result["address"]),
        address: new FormControl(result["email"])
      })
    });
  }
  updateResto(){
    this.resto.updateResto(this.route.snapshot.params.id , this.editResto.value).subscribe(()=>{
      console.log("data upated!!");
    })
  }

}
