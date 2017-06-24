import { Injectable } from '@angular/core';

// Imports for socket.io
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {
	// Init socket var and socket server url
	private socket:any;
	private url = 'http://localhost:8000';
	
  constructor() { }

	// Emit message to server
	sendMessage(message:string, username:string){
		this.socket.emit('add-message', message, username);
	}

	// Recieve messages from server
	getMessages() {
		let observable = new Observable((observer:any) => {
			this.socket = io(this.url);
			this.socket.on('message', (data:any) => {
				observer.next(data);
			});
			return () => {
				this.socket.disconnect();
			}
		})
		return observable;
	}

	// Get username from sessionStorage
	getUsername() {
		return sessionStorage.getItem('username');
	}

	// Store username in sessionStorage
	// sessionStorage is like localStorage except it's lifetime is the tab's lifetime
	setUsername(username:string) {
		sessionStorage.setItem('username', username);
	}

}
