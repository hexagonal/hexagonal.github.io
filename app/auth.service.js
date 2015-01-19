(function () {
  'use strict';

  angular
    .module('hexangular')
    .factory('auth', auth);
  
  auth.$inject = ['$window', '$firebaseAuth','$q'];
  function auth($window, $firebaseAuth, $q) {
    var fbUrl = 'https://hexagonal.firebaseio.com';
    
    var vm = {
      signIn: signIn,
      signOut: signOut
    };
    
    function signIn() {
      var fbRef = new $window.Firebase(fbUrl);
      var fbAuth = $firebaseAuth(fbRef);
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
      var fbRef = new $window.Firebase(fbUrl);
      var fbAuth = $firebaseAuth(fbRef);      
      fbAuth.$unauth();
    }
    
    return vm;
  }
})();
