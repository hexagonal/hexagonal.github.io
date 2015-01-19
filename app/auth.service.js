(function () {
  'use strict';

  angular
    .module('hexangular')
    .factory('auth', auth);
  
  auth.$inject = ['appRef', '$firebaseAuth','$q'];
  function auth(appRef, $firebaseAuth, $q) {    
    var vm = {
      signIn: signIn,
      signOut: signOut
    };
    
    function signIn() {
      var fbAuth = $firebaseAuth(appRef);
      var defer = $q.defer();

      fbAuth.$authWithOAuthPopup('google')
      
        .then(function(authData) {
          return defer.resolve(authData);
        })
      
        .catch(function(error) {
          return defer.reject(error);
        });
      
      return defer.promise;
    }
    
    function signOut() {
      $firebaseAuth(appRef).$unauth();
    }
    
    return vm;
  }
})();
