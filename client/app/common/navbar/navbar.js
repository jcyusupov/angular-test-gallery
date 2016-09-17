import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import navbarComponent from './navbar.component';

let navbarModule = angular.module('navbar', [
  uiRouter,
  ngMaterial
])

.component('navbar', navbarComponent)

.name;

export default navbarModule;
