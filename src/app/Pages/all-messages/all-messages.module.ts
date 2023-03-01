import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllMessagesRoutingModule } from './all-messages-routing.module';
import { AllMessagesComponent } from './all-messages.component';


@NgModule({
  declarations: [
    AllMessagesComponent
  ],
  imports: [
    CommonModule,
    AllMessagesRoutingModule
  ]
})
export class AllMessagesModule { }
