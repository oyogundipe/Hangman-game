      
     $(document).ready(function() {
     /** variables */
      //start global then narrow scope

      //array of word options
      let wordList = ['Apple', 'Orange', 'Pear', 'Banana', 
      'Cucumber','Cantaloupe', 'Honeydew', 'Potato','Artichoke', 'Yam', 'Cherries', 'Blackberries', 'Kiwi', 'Lemon', 'Spinach','Coconut', 'Lychee', 'Carrot', 'Mango', 'Clementine'];
      let chosenWord = '';
      let letterInWord = false;
      let dashWord = [];
      let userWins = 0;
      let numberGuesses = 10;

      /** functions */
      function createDashWord(word) {
        let tmpDashWord = [];
        for (var i=0; i < word.length; i++) {
          tmpDashWord.push("_");
        }
        return tmpDashWord;
       }
 
       function startGame () {chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
       dashword = createDashWord(chosenword);
      /** events */

      // page load init event
      startGame ();
      

      // key up
      dashWord = createDashWord(chosenWord);
      document.onkeyup = function(event) {
        let letterGuessed = event.key.toLowerCase();
        checkLetters(letterGuessed);
      }
      // create the dashword array
      for (var i=0; i < chosenword.Length; i++) {
        dashWord.push("_");
      }
      
      // check if letter in word
      for (var i =0; i < choseWord.length; i++) {
        if (letterGuessed === chosenWord[i]) {
          dashWord[i] = letterGuessed;
        } else {
          wrongGuess = true;
        }
      }

      // if dashword is equal to chosen word, winner winner
     if (dashWord.join("") === chosenWord) {
    userWins ++;
  
    // start new game
    startGame ();
    }

  // displays
  $('#dashDiv').text(dashWord.join(" ")); //pole for the fishing hook 
  $('#WwinSpan').text(userWins);
  }

     });