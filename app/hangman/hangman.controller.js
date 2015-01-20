(function () {
  'use strict';

  angular
    .module('hexangular')
    .controller('HangmanCtrl', HangmanCtrl);
  
  HangmanCtrl.$inject = ['appRef', 'auth', 'page', '$firebase'];
  function HangmanCtrl(appRef, auth, page, $firebase) {
    var vm = this;
    page.title = 'Hangman';
    page.closeNav();
    
    console.log(appRef);
    var hangmanRef = appRef.child('hangman');
    console.log(hangmanRef);
    var gamesRef = hangmanRef.child('games');
    console.log(gamesRef);
    console.log(auth.userId);
    
    $firebase(gamesRef)
      .$push({ creator: auth.userId, puzzle: 'Colin' })
      .then(function(ref) {
        vm.createdGameRef = ref.key();
        console.log(ref.key());
        console.log(vm.createdGameRef);
      });
  }
})();
