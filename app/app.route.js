(function () {
  'use strict';

  angular
    .module('hexangular')
    .config(configRoutes);
  
  configRoutes.$inject = ['$routeProvider'];
  function configRoutes($routeProvider) {    
    $routeProvider
    
      .when('/about', {
        templateUrl: 'app/about.html',
        controller: aboutController,
        controllerAs: 'vm'
      })
    
      .otherwise({
        templateUrl: 'app/home.html',
        controller: homeController,
        controllerAs: 'vm'
      });
  }
  
  function homeController() {
    console.log('homeController called.');
  }
  
  function aboutController() {
    console.log('aboutController called.');
  }  
})();
