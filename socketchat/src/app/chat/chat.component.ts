import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
	// Init var for messages, new message, socket connection and username
	messages:any = [];
	message:string;
	connection:any;
	username:string;
	alert:any = false;
	
  constructor(private _chatservice:ChatService) { }

  ngOnInit() {
		// Get username if already exists
		this.username = this._chatservice.getUsername();
		
		// Get messages from socket server
		this.connection = this._chatservice.getMessages().subscribe(
			message => {
				this.messages.push(message);
			}
		);
  }
	
	ngOnDestroy() {
		// Disconnect from server
		this.connection.unsubscribe();
	}
	
	// Function to set username
	setUsername(username) {
		this._chatservice.setUsername(username);
		this.alert = 'Username is set';
	}
	
	// Function to send message
	sendMessage() {
		this._chatservice.sendMessage(this.message, this.username);
		// Clears message input
		this.message = '';
	}

}
