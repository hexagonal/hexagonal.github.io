(function () {
  'use strict';

  angular
    .module('hexangular')
    .config(configRoutes);
  
  configRoutes.$inject = ['$routeProvider'];
  function configRoutes($routeProvider) {    
    $routeProvider
    
      .when('/', {
        templateUrl: 'app/home.html',
        controller: homeController,
        controllerAs: 'vm'
      })    
    
      .when('/about', {
        templateUrl: 'app/about.html',
        controller: aboutController,
        controllerAs: 'vm'
      })
    
      .otherwise('/');
  }
  
  function homeController() {
    var vm = this;
    vm.pageTitle = "Home";
  }
  
  function aboutController() {
    var vm = this;
    vm.pageTitle = "About";
  }
})();
