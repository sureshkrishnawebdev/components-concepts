import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaInputComponent } from './fa-input/fa-input.component';
import { NormalInputComponent } from './normal-input/normal-input.component';
import { ParentInputComponent } from './parent-input/parent-input.component';

const routes: Routes = [
    { path: '', 
      children:[
        { path:'', component: ParentInputComponent},
        { path: 'normal', component: NormalInputComponent },
        { path: 'fa', component: FaInputComponent },    
      ]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ]
})
export class InputRoutingModule {}