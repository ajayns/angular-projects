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
	
  activeCompany:string;
  activeCategory:string;
  activeYearsInBusiness:string;
  activeDescription:string;
  activePhone:string;
  activeEmail:string;
  activeStreetAddress:string;
  activeCity:string;
  activeState:string;
  activeZipcode:string;
	
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
	
	showEdit(business){
    this.changeState('edit', business.$key);
    this.activeCompany = business.company;
    this.activeCategory =         business.category;
    this.activeYearsInBusiness =  business.years_in_business;
    this.activeDescription =      business.description;
    this.activePhone =            business.phone;
    this.activeEmail =            business.email;
    this.activeStreetAddress =    business.street_address;
    this.activeCity =             business.city;
    this.activeState =            business.state;
    this.activeZipcode =          business.zipcode;
  }
  
  updateBusiness(){
    var updBusiness = {
      company:this.activeCompany,
      category:this.activeCategory,
      years_in_business:this.activeYearsInBusiness,
      description:this.activeDescription,
      phone:this.activePhone,
      email:this.activeEmail,
      street_address: this.activeStreetAddress,
      city: this.activeCity,
      state: this.activeState,
      zipcode: this.activeZipcode
    }
    
    this.firebaseservice.updateBusiness(this.activeKey, updBusiness);
    this.changeState('default', false);
  }
	
	deleteBusiness(key) {
		this.firebaseservice.deleteBusiness(key);
	}
}
	
	

