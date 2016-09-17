import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mdDataTable from 'angular-material-data-table';
import photosComponent from './photos.component';

import 'angular-fontawesome';
import 'angular-material-data-table/dist/md-data-table.min.css';

let photosModule = angular.module('photos', [
  uiRouter,
  mdDataTable,
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
