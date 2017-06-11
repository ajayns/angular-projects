import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkoutsProvider } from '../../providers/workouts/workouts';
import { WorkoutsPage } from '../workouts/workouts';

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
	title:string;
	note:string;
	type:string;
	newWorkout:any;
	
  constructor(public navCtrl: NavController, public navParams: NavParams, private workoutsprovider:WorkoutsProvider) {
  }
	
	onSubmit() {
		this.newWorkout = {
			title: this.title,
			note: this.note,
			type: this.type
		}
		
		this.workoutsprovider.addWorkout(this.newWorkout).subscribe( data => {
		});
		
		this.navCtrl.setRoot(WorkoutsPage);
	}

}
