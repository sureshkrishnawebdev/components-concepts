import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-input',
  templateUrl: './parent-input.component.html',
  styleUrls: ['./parent-input.component.scss']
})
export class ParentInputComponent implements OnInit {

  icons = ['envelope', 'unlock-alt'];

  constructor() { }

  ngOnInit(): void {
  }



}
