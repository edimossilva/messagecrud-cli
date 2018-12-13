import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messages: Message[];

  getMessages(): void {
    this.messageService.getMessages().subscribe(messages => this.messages = messages);
  }

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMessages()
  }

}
