import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";

import { CreateMessageRoutingModule } from './create-message-routing.module';
import { CreateMessageComponent } from './create-message.component';


@NgModule({
  declarations: [
    CreateMessageComponent
  ],
  imports: [
    CommonModule,
    CreateMessageRoutingModule,
    ReactiveFormsModule
  ]
})
export class CreateMessageModule { }
