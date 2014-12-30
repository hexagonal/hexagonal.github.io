(function () {
  'use strict';

  angular
    .module('hexangular')
    .config(configRoutes);
  
  configRoutes.$inject = ['$routeProvider'];
  function configRoutes($routeProvider) {
    var homeRoute = {
      templateUrl: 'app/home.html',
      controller: homeController,
      controllerAs: 'vm'
    };
    
    $routeProvider
      .when('/', homeRoute)
      .when('/index.html', homeRoute);
  }
  
  function homeController() {
    console.log('homeController called.');
  }
})();