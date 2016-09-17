import angular from 'angular';
import uiRouter from 'angular-ui-router';
import photoComponent from './photo.component';

import 'angular-fontawesome';

let photoModule = angular.module('photo', [
  uiRouter,
  'picardy.fontawesome'
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('photo', {
      url: '/photo/:id',
      component: 'photo'
    });
})

.component('photo', photoComponent)

.name;

export default photoModule;
