(function () {
  'use strict';

  angular
    .module('hexangular')
    .factory('firebaseRef', firebaseRef);
  
  firebaseRef.$inject = ['$window'];
  function firebaseRef($window) {
    var fbUrl = 'https://hexagonal.firebaseio.com';
    return new $window.Firebase(fbUrl);
  }
})();
