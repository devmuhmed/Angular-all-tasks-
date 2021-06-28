import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testprimeng',
  templateUrl: './testprimeng.component.html',
  styleUrls: ['./testprimeng.component.css']
})
export class TestprimengComponent implements OnInit {
  value1:string=""
  val:number=2
  values:string[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
