import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaInputComponent } from './fa-input/fa-input.component';
import { InputRoutingModule } from './input-routing.module';
import { NormalInputComponent } from './normal-input/normal-input.component';

@NgModule({
    declarations:[
        FaInputComponent,
        NormalInputComponent,
    ],
    imports:[
        CommonModule,
        InputRoutingModule,
    ]
})
export class InputModule {}