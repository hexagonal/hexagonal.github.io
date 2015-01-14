(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('AppBarController', AppBar);
  
  AppBar.$inject = ['$mdSidenav'];
  function AppBar($mdSidenav) {
    var vm = this;
    
    vm.toggleNavDrawer = function () {
      return $mdSidenav('navDrawer').toggle();
    };
  }
})();
