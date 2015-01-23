(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('UserCtrl', UserCtrl);
  
  UserCtrl.$inject = ['page', 'userInit'];
  function UserCtrl(page, userInit) {
    var vm = this;
    page.title = 'User';
    page.closeNav();
    
    vm.username = userInit.username;
  }
})();
