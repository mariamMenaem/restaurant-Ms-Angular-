import { Component, OnInit } from '@angular/core';
import {ListRestoService} from "../list-resto.service";
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.scss']
})
export class ListRestoComponent implements OnInit {
  collection;
  constructor(private list:ListRestoService) { }
  ngOnInit(): void {
    this.list.getList().subscribe((result) => {
      console.log(result);
      this.collection = result;
    });
  }
  deleteResto(item){
    this.collection.splice(item-1 , 1);
    this.list.delResto(item).subscribe(()=>{
     console.log("deleted");

    })
  }

}
