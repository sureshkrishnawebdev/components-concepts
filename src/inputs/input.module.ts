import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaInputComponent } from './fa-input/fa-input.component';
import { InputRoutingModule } from './input-routing.module';
import { NormalInputComponent } from './normal-input/normal-input.component';
import { ParentInputComponent } from './parent-input/parent-input.component';
import { InputRefDirective } from './shared/directives/input-ref.directive';

@NgModule({
    declarations:[
        FaInputComponent,
        NormalInputComponent,
        ParentInputComponent,
        InputRefDirective,
    ],
    imports:[
        CommonModule,
        InputRoutingModule,
    ]
})
export class InputModule {}