import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyMessagesRoutingModule } from './my-messages-routing.module';
import { MyMessagesComponent } from './my-messages.component';


@NgModule({
  declarations: [
    MyMessagesComponent
  ],
  imports: [
    CommonModule,
    MyMessagesRoutingModule
  ]
})
export class MyMessagesModule { }
