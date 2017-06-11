import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the WorkoutsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
 
export class WorkoutsProvider {
	private apiKey:string;
	private dbUrl:string;

  constructor(private http:Http) {
		this.apiKey = 'EPo_UpbWahR11ulgA3M5_2JvsiJ7xm9q';
		this.dbUrl = 'https://api.mlab.com/api/1/databases/workouts-app/collections/workouts';
  }

	getWorkouts() {
		return this.http.get(this.dbUrl+'?apiKey='+this.apiKey)
			.map( res => res.json());
	}
	
	addWorkout(workout) {
		var headers = new Headers();
    headers.append('Content-Type', 'application/json');
		return this.http.post(this.dbUrl+'?apiKey='+this.apiKey,JSON.stringify(workout),{headers: headers})
			.map(res => res.json());
	}
}
