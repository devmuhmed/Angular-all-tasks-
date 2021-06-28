import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-sudent',
  templateUrl: './sudent.component.html',
  styleUrls: ['./sudent.component.css']
})
export class SudentComponent implements OnInit {

  constructor() { }
  id:number =0
  fname:String =""
  sh(d:NgModel){
    console.log(d)
  }
  save(){
    console.log(this.fname)
  }
  show(d:NgForm){
    console.log(d)
  }
  ngOnInit(): void {
  }

}
