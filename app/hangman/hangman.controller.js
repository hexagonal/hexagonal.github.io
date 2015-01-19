(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('HangmanCtrl', HangmanCtrl);
  
  HangmanCtrl.$inject = ['firebaseRef', 'page', '$firebase'];
  function HangmanCtrl(firebaseRef, page, $firebase) {
    var vm = this;
    page.title = 'Hangman';
    page.closeNav();
  }
})();
