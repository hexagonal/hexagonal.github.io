(function () {
  'use strict';

  angular
    .module('hexangular')
    .config(config);
  
  config.$inject = ['$locationProvider'];
  function config($locationProvider) {
    $locationProvider.html5Mode(true);
  }  
})();
