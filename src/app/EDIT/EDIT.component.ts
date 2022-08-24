import { Component, OnInit } from '@angular/core';
import { Test2 } from '../test2';

@Component({
  selector: 'app-EDIT',
  templateUrl: './EDIT.component.html',
  styleUrls: ['./EDIT.component.css']
})
export class EditFormComponent implements OnInit {
  
  constructor() { }
  userModel=new Test2(0,'','','','');

  ngOnInit(): void {
  }
  saveUser(){

  }

}
