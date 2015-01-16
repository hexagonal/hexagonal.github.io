(function () {
  'use strict';

  angular
    .module('hexangular')
    .factory('page', Page);
  
  function Page() {    
      return { title: '' };
  }
})();