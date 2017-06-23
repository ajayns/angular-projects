import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ChatService {
	private socket:any;
	private url = 'http://localhost:8000';
	
  constructor() { }

}
