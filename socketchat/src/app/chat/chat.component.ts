import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
	messages:any = [];
	message:string;
	
  constructor(private _chatservice:ChatService) { }

  ngOnInit() {
  }
	
	sendMessage() {
		console.log(this.message);
	}

}
