// 'use strict';

// // brings in the assert module for unit testing
// const assert = require('assert');
// // brings in the readline module to access the command line
// const readline = require('readline');
// // use the readline module to print out to the command line
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


const pigLatin = () => {

  let word = document.getElementById("inputToTranslate").value;

  //array of vowels to check against
  const vowels = ["a","e","i","o","u"];

  // trim & lowercase word
  word = word.toLowerCase().trim();

  let startsWithVowel;
  let firstVowel;
  let slicedCharacters;
  
    if (word[0] == 'a' || word[0] == 'e' || word[0] == 'i' || word[0] == 'o' || word[0] == 'u') {
      startsWithVowel = true;
    }
    else {
      startsWithVowel =  false;
    }

  // if word starts with vowel
  if (startsWithVowel == true) {
    word += "yay";
    console.log(word);
    document.getElementById("translation").innerHTML = word;
  }
  //if word doesn't start with a vowel
  else {
    //find index of first vowel
    for (let i=0; i<=word.length-1; i++) {
      if (word[i] !== "a" && word[i] !== "e" && word[i] !== "i" && word[i] !== "o" && word[i] !== "u") {
      }
      else {
        firstVowel = i;
        break;
      } 
    }
    // copy characters up until first vowel
    slicedCharacters = word.slice(0, firstVowel);
    // cut off characters before first vowel
    word = word.slice(firstVowel, word.length);
    // add sliced portion to end
    word = word + slicedCharacters;
    // add 'ay' to end of word
    word += "ay";
    console.log(word);
    document.getElementById("translation").innerHTML = word;
}
  
}

// // the first function called in the program to get an input from the user
// // to run the function use the command: node main.js
// // to close it ctrl + C
// const getPrompt = () => {
//   rl.question('word ', (answer) => {
//     console.log( pigLatin(answer) );
//     getPrompt();
//   });
