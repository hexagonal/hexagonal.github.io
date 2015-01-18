(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('AppBarCtrl', AppBarCtrl);
  
  AppBarCtrl.$inject = ['page'];
  function AppBarCtrl(page) {
    var vm = this;
    
    vm.page = page;
    
    vm.toggleNav = function () {
      page.toggleNav();
    };
  }
})();
