(function () {
  'use strict';

  angular
    .module('hexangular')
    .factory('page', page);
  
  page.$inject = ['$mdSidenav'];
  function page($mdSidenav) {
    var vm = {
      title: '',
      toggleNav: toggleNav,
      openNav: openNav,
      closeNav: closeNav
    };
    
    var mainNavId = 'mainNav';
    
    function toggleNav() {
      $mdSidenav(mainNavId).toggle();
    }
    
    function openNav() {
      $mdSidenav(mainNavId).open();
    }    
    
    function closeNav() {
      $mdSidenav(mainNavId).close();
    }
    
    return vm;
  }
})();
