import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
//import { RegistrationComponent } from '../authentication/registration/registration.component';


@NgModule({
  //declarations: [RegistrationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
