import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Message {
  title: string;
  messages: string;
  time: Date;
  name: string;
}

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html'
})
export class CreateMessageComponent implements OnInit {

  listMessages: Message[] = [];

  form: FormGroup = this.formBuilder.group({
    title: [null, Validators.required],
    messages: [null, Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  share(){
    if(this.form.valid){
      this.listMessages.push({
        title: this.form.get('title')?.value,
        messages: this.form.get('messages')?.value,
        time: new Date(),
        name: 'Daniel Amadeus',
      });
      this.form.reset();
    }else{
      alert('All fields are required');
    }
  }

}
