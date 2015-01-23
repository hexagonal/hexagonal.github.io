(function () {
  'use strict';

  angular
    .module('hexangular')
    .factory('userStorage', userStorage);
  
  userStorage.$inject = ['appRef', '$firebase', '$q'];
  function userStorage(appRef, $firebase, $q) {
    var usersRef = appRef.child('users');
    
    var vm = {
      load: load
    };
    
    function load(userId) {
      var defer = $q.defer();
      
      var userRef = usersRef.child(userId);
      var usernameRef = userRef.child('username');
      var user = {};
      
      $firebase(usernameRef)
        .$asObject()
        .$loaded()
      
        .then(function(usernameObj) {   
          user.username = usernameObj.$value;
          console.log(user.username);
          return defer.resolve(user);
        })
      
        .catch(function(error) {
          return defer.reject(error);
        });
      
      return defer.promise;
    }
    
    return vm;
  }
})();
