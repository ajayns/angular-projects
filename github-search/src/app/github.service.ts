import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
	private username:string;
	
  constructor(private http:Http) {
		console.log('Service Ready');
	}
	
	// Get user by name
	getUser() {
		return this.http.get('http://api.github.com/users/'+this.username)
			.map(res => res.json());
	}

	// Get user repos
	getRepos() {
		return this.http.get('http://api.github.com/users/'+this.username+'/repos')
			.map(res => res.json());
	}
	

	// Update username as user types in search
	updateUser(username:string) {
		this.username = username;
	}
}
