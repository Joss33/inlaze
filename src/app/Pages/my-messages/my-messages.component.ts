import { Component, OnInit } from '@angular/core';

export interface Message {
  title: string;
  messages: string;
  time: Date;
  name: string;
}

@Component({
  selector: 'app-my-messages',
  templateUrl: './my-messages.component.html'
})
export class MyMessagesComponent implements OnInit {

  listMessages: Message[] = [
    {
      title: 'What do you do?',
      messages: 'What do you do?',
      time: new Date(),
      name: 'Daniel Amadeus'
    },
    {
      title: 'What do you do?',
      messages: 'What do you do?',
      time: new Date(),
      name: 'Daniel Amadeus'
    },
    {
      title: 'What do you do?',
      messages: 'What do you do?',
      time: new Date(),
      name: 'Daniel Amadeus'
    },
    {
      title: 'What do you do?',
      messages: 'What do you do?',
      time: new Date(),
      name: 'Daniel Amadeus'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
