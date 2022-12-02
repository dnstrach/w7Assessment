/* 1. Write a function that takes in an array of numbers. 
The function should return True if any two numberss in list sum to 0, 
and false otherwise.
*/

const addToZero = (arr) => {
    for (let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return true
            }else{
                return false
            }
        }
    }
} 

addToZero([]);
// -> False
//undefined?

addToZero([1]);
// -> False
// false

addToZero([1, 2, 3]);
// -> False
//false

addToZero([1, 2, 3, -2]);
// -> True
//true??


//On^2

/* 2. Write a function that takes in a single word, as a string. It should return 
True if that word contains only unique characters. Return False otherwise.
*/

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
      uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
  }
  
  console.log(hasUniqueChars("Monday")) //true
  console.log(hasUniqueChars("Moonday")) //false
  console.log(hasUniqueChars("Bob")) //true

//On

/* 3. A pangram is a sentence that contains all the letters of the English alphabet 
at least once, like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not.
*/

const pangram = (str) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
    str = str.toLowerCAse();

    return alphabet.every(x => str.includes(x))
}

pangram("The quick brown fox jumps over the lazy dog!");
// -> True

pangram("I like cats, but not mice");
// -> False

//O(1)

/* 
Write a function, find_longest_word, that takes a list of words and returns 
the length of the longest one.
*/

const findLongestWord = (arr) => {
    var longestWord = 0
    for(let i = 0; i < arr.length; i++){
        if (arr[i].length > longestWord){
            longestWord = arr[i].length
        }
    }
    return longestWord
}

findLongestWord(["hi", "hello"]);
// -> 5

//On