import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkoutDetailsPage } from '../workout-details/workout-details';

import { WorkoutsProvider } from '../../providers/workouts/workouts';

@IonicPage()
@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
})
export class WorkoutsPage implements OnInit {
	workouts: any[];
	
  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutsprovider:WorkoutsProvider) {
  	this.workoutsprovider.getWorkouts().subscribe( workouts => {
			this.workouts = workouts;
		});
	}

	ngOnInit() {
		this.workoutsprovider.getWorkouts().subscribe( workouts => {
			this.workouts = workouts;
		});
	}
	
	workoutSelected(workout) {
		this.navCtrl.push(WorkoutDetailsPage, {
			workout: workout
		})
	}
	
}
