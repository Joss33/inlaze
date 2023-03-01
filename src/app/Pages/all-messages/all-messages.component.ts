import { Component, OnInit } from '@angular/core';

export interface Message {
  title: string;
  messages: string;
  time: Date;
  name: string;
}

@Component({
  selector: 'app-all-messages',
  templateUrl: './all-messages.component.html'
})
export class AllMessagesComponent implements OnInit {

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
