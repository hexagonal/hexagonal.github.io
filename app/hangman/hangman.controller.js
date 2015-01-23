(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('HangmanCtrl', HangmanCtrl);
  
  HangmanCtrl.$inject = ['hangmanStorage', 'page'];
  function HangmanCtrl(hangmanStorage, page) {
    var vm = this;
    page.title = 'Hangman';
    page.closeNav();
    
    vm.recentGames = hangmanStorage.getRecentGames();
  }
})();
