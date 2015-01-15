(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('MainCtrl', MainCtrl);
  
  MainCtrl.$inject = ['$scope','page'];
  function MainCtrl($scope, page) {
    var vm = this;
    vm.pageTitle = page.title;
    
    $scope.$watch(page.getTitle, pageTitleListener, true);
    
    function pageTitleListener(oldValue, newValue) {
      vm.pageTitle = newValue;
    }
  }
})();