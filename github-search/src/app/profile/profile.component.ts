import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service'

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	// Declare variables
	user:any = [];
	repos:any = [];
	username:string;
  
	constructor(private githubService:GithubService) { 
		// Initialize with false so that it doesn't display with *ngIf
		this.user = false;
	}

  ngOnInit() {
  }

	searchUser() {
		this.githubService.updateUser(this.username);
		
		// Get user calling githubService
		this.githubService.getUser().subscribe( user => {
			this.user = user;
		});
		
		// Get repos calling githubService
		this.githubService.getRepos().subscribe( repos => {
			this.repos = repos;
		});
	}
}
