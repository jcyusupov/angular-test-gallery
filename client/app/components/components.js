import angular from 'angular';
import Home from './home/home';
import Photos from './photos/list/photos';
import Photo from './photos/details/photo';

let componentModule = angular.module('app.components', [
  Home,
  Photos,
  Photo
])

.name;

export default componentModule;
