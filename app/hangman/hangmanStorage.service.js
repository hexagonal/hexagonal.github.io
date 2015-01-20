(function () {
  'use strict';

  angular
    .module('hexangular')
    .factory('hangmanStorage', hangmanStorage);
  
  hangmanStorage.$inject = ['appRef', 'auth', '$firebase'];
  function hangmanStorage(appRef, auth, $firebase) {
    
    var hangmanRef = appRef.child('hangman');
    var gamesRef = hangmanRef.child('games');    
    
    var vm = {
      getRecentGames: getRecentGames
    };
    
    function getRecentGames() {
      var ref = gamesRef.limitToLast(20);
      return $firebase(ref).$asArray();
    }
    
//    $firebase(gamesRef)
//      .$push({ creator: auth.userId, puzzle: 'Colin' })
//      .then(function(ref) {
//        vm.createdGameRef = ref.key();
//        console.log(ref.key());
//        console.log(vm.createdGameRef);
//      });
    
    return vm;
  }
})();
