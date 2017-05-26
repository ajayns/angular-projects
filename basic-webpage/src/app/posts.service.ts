import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; // Import the http manager
import 'rxjs/add/operator/map';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

	getAllPosts() {
		return this.http.get('/api')
			.map(res => res.json());
	}
}
