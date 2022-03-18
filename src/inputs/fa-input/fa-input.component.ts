import { AfterContentInit, Component, ContentChild, HostBinding, Input, OnInit } from '@angular/core';
import { InputRefDirective } from '../shared/directives/input-ref.directive';

@Component({
  selector: 'app-fa-input',
  templateUrl: './fa-input.component.html',
  styleUrls: ['./fa-input.component.scss']
})
export class FaInputComponent implements OnInit, AfterContentInit {

  @Input()
  icon: string = '';

  @ContentChild(InputRefDirective)
  inputRef!: InputRefDirective;

  // note 1 : when using directives - we shouldn't use them inside quotes
  // wrong - @ContentChild('InputRefDirective')
  // correct - @ContentChild(InputRefDirective)

  // note 2 : when using hostbinding to apply class - we shouldn't start class with .
  // wrong - @HostBinding('.class.input-focus')
  // correct - @HostBinding('class.input-focus')

  ngOnInit(): void {
    console.log(`inside ngOnInit inputRef `, this.inputRef);
  }

  ngAfterContentInit(): void {
    console.log(`inside ngAfterContentInit inputRef `, this.inputRef);
    if(!this.inputRef){
      console.error('app-fa-input requires an input element')
    }
  }

  @HostBinding('class.input-focus')
  get isInputFocus(){
    return this.inputRef ? this.inputRef.focus : false;
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
