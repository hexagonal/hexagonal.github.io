(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('MainCtrl', MainCtrl);
  
  MainCtrl.$inject = ['page'];
  function MainCtrl(page) {
    var vm = this;
    vm.page = page;
  }
})();