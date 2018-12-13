import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})

export class MessageCreateComponent implements OnInit {

  message: Message = new Message();

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  add(): void {
    this.messageService.addMessage(this.message)
      .subscribe();
  }
}
