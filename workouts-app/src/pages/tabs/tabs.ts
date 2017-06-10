import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { AddPage } from '../add/add';
import { WorkoutsPage } from '../workouts/workouts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  workoutsRoot = WorkoutsPage;
  aboutRoot = AboutPage;
  addRoot = AddPage;

  constructor() {

  }
}
