import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { FirebaseService } from './firebase.service';

import { Business } from '../interfaces/business';
import { Category } from '../interfaces/category';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  businesses: Business[];
	categories: Category[];
	
	constructor(private firebaseservice:FirebaseService) { }
	
	ngOnInit() {
		this.firebaseservice.getBusinesses()
			.subscribe( businesses => {
				this.businesses = businesses;
		});
		
		this.firebaseservice.getCategories()
			.subscribe( categories => {
				this.categories = categories;
		});
	}
}
