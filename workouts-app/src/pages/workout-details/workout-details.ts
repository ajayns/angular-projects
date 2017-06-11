import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WorkoutsPage } from '../workouts/workouts';
import { WorkoutsProvider } from '../../providers/workouts/workouts';
/**
 * Generated class for the WorkoutDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html',
})
export class WorkoutDetailsPage {
	workout:any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutsprovider:WorkoutsProvider) {
		this.workout = this.navParams.get('workout')
  }
	
	deleteWorkout(id) {
		this.workoutsprovider.deleteWorkout(id).subscribe();		
		this.navCtrl.setRoot(WorkoutsPage);
	}


}
