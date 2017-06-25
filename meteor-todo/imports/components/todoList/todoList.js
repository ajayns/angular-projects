import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './todoList.html';
import { Tasks } from '../../api/tasks.js';

class TodoListCtrl {
	constructor($scope) {
		$scope.viewModel(this);
		this.hideCompleted = false;
		this.subscribe('tasks');

		this.helpers({
			tasks() {
				const selector = {};
				
				if(this.getReactively('hideCompleted')) {
					selector.checked = {
						$ne: true
					};
				}
				
				return Tasks.find(selector, {
					sort: {
						createdAt: -1
					}
				});
			},
			incompleteCount() {
				return Tasks.find({
					checked: {
						$ne: true
					}
				}).count();
			},
			currentUser() {
				return Meteor.user();
			}
		})
	}
	
	addTask(newTask) {
		Meteor.call('tasks.insert', newTask);
		this.newTask = '';
	}
	
	setChecked(task) {
		Meteor.call('tasks.setChecked', task._id, !task.checked);
	}
	
	removeTask(task) {
		Meteor.call('tasks.remove', task._id)
	}
}

	export default angular.module('todoList', [
		angularMeteor
	])
		.component('todoList', {
			templateUrl: 'imports/components/todoList/todoList.html',
			controller: ['$scope', TodoListCtrl]
		});
