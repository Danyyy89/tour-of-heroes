import { Component, OnInit } from '@angular/core';

import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // Angular inject the singleton MessageService into it when it creates the MessageComponent
  // Angular only binds to public component property
  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
