import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutDetailsPage } from './workout-details';

@NgModule({
  declarations: [
    WorkoutDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutDetailsPage),
  ],
  exports: [
    WorkoutDetailsPage
  ]
})
export class WorkoutDetailsPageModule {}
