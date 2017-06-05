import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import 'rxjs/add/operator/map';

import { Business } from '../interfaces/business';
import { Category } from '../interfaces/category';

@Injectable()
export class FirebaseService {
	businesses: FirebaseListObservable<Business[]>;
	categories: FirebaseListObservable<Category[]>;

  constructor(private db:AngularFireDatabase) { }
	
	getBusinesses() {
		this.businesses = this.db.list('/businesses') as FirebaseListObservable<Business[]>
			return this.businesses;
	}

	getCategories() {
		this.categories = this.db.list('/categories') as FirebaseListObservable<Category[]>
			return this.categories;
	}

	
}
