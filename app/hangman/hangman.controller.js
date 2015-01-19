(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('HangmanCtrl', HangmanCtrl);
  
  HangmanCtrl.$inject = ['page'];
  function HangmanCtrl(page) {
    var vm = this;
    page.title = 'Hangman';
    page.closeNav();
  }
})();
