(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('HangmanCtrl', HangmanCtrl);
  
  HangmanCtrl.$inject = ['appRef', 'page', '$firebase'];
  function HangmanCtrl(appRef, page, $firebase) {
    var vm = this;
    page.title = 'Hangman';
    page.closeNav();
  }
})();
