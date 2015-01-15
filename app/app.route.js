(function () {
  'use strict';

  angular
    .module('hexangular')
    .config(configRoutes);
  
  configRoutes.$inject = ['$routeProvider',];
  function configRoutes($routeProvider) {    
    $routeProvider
    
      .when('/', {
        templateUrl: 'app/home.html',
        controller: HomeCtrl,
        controllerAs: 'home'
      })    
    
      .when('/about', {
        templateUrl: 'app/about.html',
        controller: AboutCtrl,
        controllerAs: 'about'
      })
    
//      .when('/codebreaker', {
//        templateUrl: 'app/codebreaker/codebreaker.html',
//        controller: CodebreakerCtrl,
//        controllerAs: 'codebreaker'
//      })
//    
      .otherwise('/');
  }
  
  HomeCtrl.$inject = ['page'];
  function HomeCtrl(page) {
    var vm = this;
    page.title = 'Home';
  }
  
  HomeCtrl.$inject = ['page'];
  function AboutCtrl(page) {
    var vm = this;
    page.title = 'About';
  }
})();
