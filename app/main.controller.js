(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('MainCtrl', MainCtrl);
  
  MainCtrl.$inject = ['auth',];
  function MainCtrl(auth) {
    var vm = this;
    vm.signedIn = false;
    
    vm.signIn = function() {
      auth
        .signIn()
        
        .then(function (authData) {
          console.log('Logged in as:', authData);
          vm.signedIn = true;
        })
      
        .catch(function (error) {
          vm.signedIn = false;
        });
    };
    
    vm.signOut = function() {
      auth.signOut();
      vm.signedIn = false;
    };
  }
})();