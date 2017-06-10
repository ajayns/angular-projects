import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkoutsPage } from './workouts';

@NgModule({
  declarations: [
    WorkoutsPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkoutsPage),
  ],
  exports: [
    WorkoutsPage
  ]
})
export class WorkoutsPageModule {}
