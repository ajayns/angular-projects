import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	user:any = [];
	username:string;
  
	constructor(private githubService:GithubService) { 
		this.user = false;
	}

  ngOnInit() {
  }

	searchUser() {
		this.githubService.updateUser(this.username);
		
		this.githubService.getUser().subscribe( user => {
			console.log(user);
			this.user = user;
		})
	}
}
