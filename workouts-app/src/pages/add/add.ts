import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WorkoutsProvider } from '../../providers/workouts/workouts';
import { WorkoutsPage } from '../workouts/workouts';
/**
 * Generated class for the AddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
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
