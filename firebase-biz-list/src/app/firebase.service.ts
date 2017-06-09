import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import 'rxjs/add/operator/map';

import { Business } from '../interfaces/business';
import { Category } from '../interfaces/category';

@Injectable()
export class FirebaseService {
	// Intialize firebase observables
	businesses: FirebaseListObservable<Business[]>;
	categories: FirebaseListObservable<Category[]>;

  constructor(private db:AngularFireDatabase) { }
	
	// Get businesses
	getBusinesses(category:string = null) {
		if(category != null) {
			// Query by category if specified
			this.businesses = this.db.list('/businesses',  {
				query:{
					orderByChild: 'category',
					equalTo: category
				}
			}) as FirebaseListObservable<Business[]>
		} else {
			this.businesses = this.db.list('/businesses') as FirebaseListObservable<Business[]>
		}
			return this.businesses;
	}

	// Function names are self explanatory from here

	getCategories() {
		this.categories = this.db.list('/categories') as FirebaseListObservable<Category[]>
			return this.categories;
	}

	addBusiness(newBusiness){
		const promise = this.businesses.push(newBusiness);
		promise
  		.then(_ => console.log('success'))
  		.catch(err => console.log(err, 'You do not have access!'));
	}
	

	deleteBusiness(key) {
		const promise = this.businesses.remove(key);
		promise
  		.then(_ => console.log('success'))
  		.catch(err => console.log(err, 'You do not have access!'));
	}
			
	updateBusiness(key, updBusiness) {
	const promise = this.businesses.update(key, updBusiness);
		promise
  		.then(_ => console.log('success'))
  		.catch(err => console.log(err, 'You do not have access!'));
	}
	
	
}
