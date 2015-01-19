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
          vm.signedIn = true;
          page.closeNav();
          page.showToast('Signed in');
        })
      
        .catch(function (error) {
          vm.signedIn = false;
          page.closeNav();
          page.showError(error);
        });
    };
    
    vm.signOut = function() {
      auth.signOut();
      vm.signedIn = false;
      page.closeNav();
      page.showToast('Signed out');
    }; 
  }
})();
