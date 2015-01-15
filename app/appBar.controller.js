(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('AppBarCtrl', AppBarCtrl);
  
  AppBarCtrl.$inject = ['page', '$mdSidenav'];
  function AppBarCtrl(page, $mdSidenav) {
    var vm = this;
    
    vm.page = page;
    vm.toggleNavDrawer = function () {
      return $mdSidenav('navDrawer').toggle();
    };
  }
})();
