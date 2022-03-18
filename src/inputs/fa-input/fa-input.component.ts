import { AfterContentInit, Component, ContentChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss']
})
export class FaInputComponent implements OnInit, AfterContentInit {

  @Input()
  icon: string = '';

  @ContentChild('inputRef')
  inputRef!: HTMLInputElement;

  constructor() { }

  ngOnInit(): void {
    console.log(`inside ngOnInit inputRef `, this.inputRef);
  }

  ngAfterContentInit(): void {
    console.log(`inside ngAfterContentInit inputRef `, this.inputRef);
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
