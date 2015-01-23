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
    
      .when('/users/:userId', {
        templateUrl: 'app/user/user.html',
        controller: 'UserCtrl',
        controllerAs: 'user',
        resolve: { userInit: userInit }
      })
    
      .when('/hangman', {
        templateUrl: 'app/hangman/hangman.html',
        controller: 'HangmanCtrl',
        controllerAs: 'hangman'
      })
       
      .otherwise('/');
  }
  
  userInit.$inject = ['userStorage', '$route'];
  function userInit(userStorage, $route) {
    var userId = $route.current.params.userId;
    return userStorage.load(userId);
  }
  
  HomeCtrl.$inject = ['page'];
  function HomeCtrl(page) {
    var vm = this;
    page.title = 'Home';
    page.closeNav();
  }
  
  HomeCtrl.$inject = ['page'];
  function AboutCtrl(page) {
    var vm = this;
    page.title = 'About';
    page.closeNav();
  }
})();
