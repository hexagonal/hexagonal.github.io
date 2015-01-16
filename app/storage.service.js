(function () {
  'use strict';

  angular
    .module('hexangular')
    .factory('storage', Storage);
  
  function Storage() {
    var save = function (name, model) {
      localStorage.setItem(name, JSON.stringify(model));
    };
    
    var load = function (name) {
      return JSON.parse(localStorage.getItem(name));
    };
    
    return {
      save: save,
      load: load
    };
  }
})();