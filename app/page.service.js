(function () {
  'use strict';

  angular
    .module('hexangular')
    .service('page', Page);
  
  function Page() {    
      this.title = '';
  }
})();