(function () {
  'use strict';

  angular
    .module('hexangular')
    .factory('auth', auth);
  
  auth.$inject = ['appRef', '$firebase', '$firebaseAuth','$q'];
  function auth(appRef, $firebase, $firebaseAuth, $q) {    
    var vm = {
      signIn: signIn,
      signOut: signOut,
      signedIn: false,
      userId: '',
      username: ''
    };
    
    function signIn() {
      var defer = $q.defer();
      var usersRef = appRef.child('users');

      var fbAuth = $firebaseAuth(appRef);  

      fbAuth.$authWithOAuthPopup('google')
      
        .then(function(authData) {        
          vm.signedIn = true;
          vm.userId = authData.uid;               
        
          var userRef = usersRef.child(authData.uid);
          var usernameRef = userRef.child('username');
          return $firebase(usernameRef)
            .$asObject()
            .$loaded();
        })
      
        .then(function(usernameObj) {      
          vm.username = usernameObj.$value;
          return defer.resolve(vm);
        })
      
        .catch(function(error) {
          vm.signedIn = false;
          vm.userId = '';
          vm.username = '';
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
