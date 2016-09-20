import angular from 'angular';
import uiRouter from 'angular-ui-router';
import photosComponent from './photos.component';

import 'angular-fontawesome';

let photosModule = angular.module('photos', [
  uiRouter,
  'picardy.fontawesome'
])

.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('photos', {
      url: '/photos',
      component: 'photos'
    });
})

.component('photos', photosComponent)

.name;

export default photosModule;
