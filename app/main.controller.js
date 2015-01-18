(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('MainCtrl', MainCtrl);
  
  MainCtrl.$inject = ['auth', 'page'];
  function MainCtrl(auth, page) {    
    var vm = this;
    
    vm.signedIn = false;    
    
    vm.signIn = function() {
      auth
        .signIn()
        
        .then(function (authData) {
          console.log('Logged in as:', authData);
          vm.signedIn = true;
          page.closeNav();
        })
      
        .catch(function (error) {
          vm.signedIn = false;
          page.closeNav();
        });
    };
    
    vm.signOut = function() {
      auth.signOut();
      vm.signedIn = false;
      page.closeNav();
    }; 
  }
})();
