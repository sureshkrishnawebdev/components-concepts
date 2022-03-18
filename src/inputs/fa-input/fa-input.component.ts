import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss']
})
export class FaInputComponent implements OnInit {

  @Input()
  icon: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  get faClass(){
    /* As ngclass expects a obj we need to create an obj */
    const custmClass: any = {
      'fa': true
    }
    if( this.icon ){      
      custmClass['fa-'+ this.icon] = true;
    }
    return custmClass;
  }

}
