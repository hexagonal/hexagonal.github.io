(function () {
  'use strict';

  angular
    .module('hexangular')
    .factory('page', page);
  
  function page() {    
    console.log('Page service loaded.');
    
    var getTitle = function() { return this.title; };
    
    return {
      title: 'Ned',
      getTitle: getTitle
    };
  }
})();