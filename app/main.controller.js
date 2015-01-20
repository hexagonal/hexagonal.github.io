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
          page.showToast('Signed in');
        })
      
        .catch(function (error) {
          page.showError(error);
        })
      
        .finally(function () {
          vm.signedIn = auth.signedIn;
          page.closeNav();
        });
    };
    
    vm.signOut = function() {
      auth.signOut();
      vm.signedIn = auth.signedIn;
      page.closeNav();
      page.showToast('Signed out');
    }; 
  }
})();
