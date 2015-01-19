(function () {
  'use strict';

  angular
    .module('hexangular',
            ['firebase',
             'ngMaterial',
             'ngResource',
             'ngRoute'])
    .config(config)
    .factory('appRef', appRef);
  
  config.$inject = ['$locationProvider'];
  function config($locationProvider) {
    $locationProvider.html5Mode(true);
  }  
  
  appRef.$inject = ['$window'];
  function appRef($window) {
    var fbUrl = 'https://hexagonal.firebaseio.com';
    return new $window.Firebase(fbUrl);
  }  
})();
