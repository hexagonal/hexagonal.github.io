(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('HangmanCtrl', HangmanCtrl);
  
  HangmanCtrl.$inject = ['hangmanStorage', 'page', '$firebase'];
  function HangmanCtrl(hangmanStorage, page, $firebase) {
    var vm = this;
    page.title = 'Hangman';
    page.closeNav();
    
    vm.recentGames = hangmanStorage.getRecentGames();
  }
})();
