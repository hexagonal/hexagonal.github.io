(function () {
  'use strict';

  angular
    .module('hexangular')
    .factory('auth', auth);
  
  auth.$inject = ['appRef', '$firebaseAuth','$q'];
  function auth(appRef, $firebaseAuth, $q) {    
    var vm = {
      signIn: signIn,
      signOut: signOut,
      signedIn: false,
      userId: ''
    };
    
    function signIn() {
      var fbAuth = $firebaseAuth(appRef);
      var defer = $q.defer();

      fbAuth.$authWithOAuthPopup('google')
      
        .then(function(authData) {
          vm.signedIn = true;
          vm.userId = authData.uid;
          return defer.resolve(vm);
        })
      
        .catch(function(error) {
          vm.signedIn = false;
          vm.userId = '';        
          return defer.reject(error);
        });
      
      return defer.promise;
    }
    
    function signOut() {
      vm.signedIn = false;
      vm.userId = '';      
      $firebaseAuth(appRef).$unauth();
    }
    
    return vm;
  }
})();
