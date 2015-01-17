(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('MainCtrl', MainCtrl);
  
  MainCtrl.$inject = ['$window', '$firebase', '$firebaseAuth', 'page'];
  function MainCtrl($window, $firebase, $firebaseAuth, page) {
    var vm = this;
    vm.page = page;
    
    vm.login = function() {
      var ref = new $window.Firebase('https://hexagonal.firebaseio.com/data');
      var auth = $firebaseAuth(ref);

      auth.$authWithOAuthPopup('google')
      
        .then(function(authData) {
          console.log('Logged in as:', authData);
        })
      
        .catch(function(error) {
          console.error('Authentication failed: ', error);
        });      
    };
  }
})();