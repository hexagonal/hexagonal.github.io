(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('AppBarCtrl', AppBarCtrl);
  
  AppBarCtrl.$inject = ['$mdSidenav'];
  function AppBarCtrl($mdSidenav) {
    var vm = this;
    
    vm.toggleNavDrawer = function () {
      return $mdSidenav('navDrawer').toggle();
    };
  }
})();
