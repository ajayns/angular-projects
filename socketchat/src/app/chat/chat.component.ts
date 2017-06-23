import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
	messages:any = [];
	message:string;
	connection:any;
	username:string;
	alert:any = false;
	
  constructor(private _chatservice:ChatService) { }

  ngOnInit() {
		this.username = this._chatservice.getUsername();
		
		this.connection = this._chatservice.getMessages().subscribe(
			message => {
				console.log(message);
				this.messages.push(message);
			}
		);
  }
	
	ngOnDestroy() {
		this.connection.unsubscribe();
	}
	
	setUsername(username) {
		this._chatservice.setUsername(username);
		this.alert = 'Username is set';
	}
	
	sendMessage() {
		this._chatservice.sendMessage(this.message, this.username);
		this.message = '';
	}

}
