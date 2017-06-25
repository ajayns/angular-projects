
import angular from 'angular';
import angularMeteor from 'angular-meteor'; 
import todoList from '../imports/components/todoList/todoList';
import '../imports/startup/accounts-config.js';

angular.module('meteor-todo', [
  angularMeteor,
	todoList.name,
	'accounts.ui'
]);

function onReady() {
  angular.bootstrap(document, ['meteor-todo']);
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}

