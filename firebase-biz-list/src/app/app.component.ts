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
	appState:string;
	activeKey:string;
	
	constructor(private firebaseservice:FirebaseService) { }
	
	ngOnInit() {
		this.appState = 'default';
		this.firebaseservice.getBusinesses()
			.subscribe( businesses => {
				this.businesses = businesses;
		});
		
		this.firebaseservice.getCategories()
			.subscribe( categories => {
				this.categories = categories;
		});
	}
	
	changeState(state, key) {
		if(key)
			this.activeKey = key;
		this.appState = state;
	}
	
	filterCategory(category) {
		this.firebaseservice.getBusinesses(category)
			.subscribe( businesses => {
				this.businesses = businesses;
		});
	}
	
	addBusiness(
    company:string,
    category:string, 
    years_in_business:number,
    description:string,
    phone:string,
    email:string,
    street_address:string,
    city:string,
    state:string,
    zipcode:string
  ){
    var created_at = new Date().toString();
    
    var newBusiness = {
      company: company,
      category: category,
      years_in_business:years_in_business,
      description:description,
      phone:phone,
      email:email,
      street_address: street_address,
      city: city,
      state: state,
      zipcode: zipcode,
      created_at:created_at
    }
    
    this.firebaseservice.addBusiness(newBusiness);
    this.changeState('default', false);
  }
	
	deleteBusiness(key) {
		this.firebaseservice.deleteBusiness(key);
	}
}
	
	

