import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'app-fa-input input'
})
export class InputRefDirective {

  focus: boolean = false;

  @HostListener('focus')
  onFocus(){
    this.focus = true;
    console.log(`inside on focus host listener ${this.focus}`);    
  }

  @HostListener('blur')
  onBlur(){
    this.focus = false;
    console.log(`inside on blur host listener ${this.focus}`);
  }

}
