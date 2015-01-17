(function () {
  'use strict';

  angular
    .module('hexangular')
    .factory('storage', Storage);
  
  Storage.$inject = ['$window'];
  function Storage($window) {
    var save = function (name, model) {
      $window.localStorage.setItem(name, $window.JSON.stringify(model));
    };
    
    var load = function (name) {
      return $window.JSON.parse($window.localStorage.getItem(name));
    };
    
    return {
      save: save,
      load: load
    };
  }
})();