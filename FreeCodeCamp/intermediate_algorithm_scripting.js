/*sum all numbers in a range
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
//so im going to have to sort the array to have it least to greatest
//pretty sure that JS has a range function as well
//from there probably do like sum(range(array)) or something like that
// let theArray = [10,5]

// let algo = (arr) => {
//     let range = arr.sort((a,b) => a-b)
//     let answer = range[0]
//     let i = range[0]+1

//     while (i <= range[1]) {
//         answer = answer + i
//         i++
//     }
//     return answer
// }
// algo(theArray)
// console.log(algo(theArray))

//Diff Two Arrays
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.
*/
//so im going to create a function with two parameters, one for each array
//in that funtion i need to have a for loop within a for loop
//the first for loop takes first argument and then loop it through the inner loop which is the comparing array
//I can probably sort the arrays just to help make it a quicker process
//OR i can merge them together and remove duplicates
//is there a remove duplicate function in JS, if not I can just sort and loop through to check

// a = ["andesite", "grass", "dirt", "pink wool", "dead shrub"]
// b = ["diorite", "andesite", "grass", "dirt", "dead shrub"]

// let difference = a.filter(c => !b.includes(c)).concat(b.filter(c => !a.includes(c)));
// console.log(difference)

//seek and destroy
/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/
// function destroyer(arr) {
//     var arg = Array.from(arguments)
//     var optional = arg.slice(1)
  
//     let answer = arr.filter(item => !optional.includes(item))
//     console.log(answer)
//     return answer
//   }

//   for (let index = 0; index < array.length; index++) {
//       const element = array[index];
      
//   }

//   Wherefore art thou
//   Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
  
//   For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.


//   function whatIsInAName(collection, source) {
//     // Only change code below this line
//     var keys = Object.keys(source);
  
//     return collection.filter(obj =>{
//       for (var key of keys){
//         if (!obj.hasOwnProperty(key) || obj[key] !== source[key]){
//           return false
//         }
//       }
//       return true
//     });
//   }

// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
// function spinalCase(str) {
//     var upperCase = str.replace(/([a-z])([A-Z])/g, "$1 $2");
//     console.log(upperCase)
//     var spaceAndDash = upperCase.replace(/\s|_/g, '-').toLowerCase();
//     console.log(spaceAndDash)
//     return spaceAndDash;
//   }
  
  
//   spinalCase('thisIsSpinalTap');

  /*sum all numbers in a range
We'll pass you an array of two numbers. 
Return the sum of those two numbers plus the sum of all the numbers between them. 
The lowest number will not always come first.
For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/
//so im going to have to sort the array to have it least to greatest
//pretty sure that JS has a range function as well
//from there probably do like sum(range(array)) or something like that
// let theArray = [10,5]

// let algo = (arr) => {
//     let range = arr.sort((a,b) => a-b)
//     let answer = range[0]
//     let i = range[0]+1

//     while (i <= range[1]) {
//         answer = answer + i
//         i++
//     }
//     return answer
// }
// algo(theArray)
// console.log(algo(theArray))

//Diff Two Arrays
/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
In other words, return the symmetric difference of the two arrays.
Note: You can return the array with its elements in any order.
*/
//so im going to create a function with two parameters, one for each array
//in that funtion i need to have a for loop within a for loop
//the first for loop takes first argument and then loop it through the inner loop which is the comparing array
//I can probably sort the arrays just to help make it a quicker process
//OR i can merge them together and remove duplicates
//is there a remove duplicate function in JS, if not I can just sort and loop through to check

// a = ["andesite", "grass", "dirt", "pink wool", "dead shrub"]
// b = ["diorite", "andesite", "grass", "dirt", "dead shrub"]

// let difference = a.filter(c => !b.includes(c)).concat(b.filter(c => !a.includes(c)));
// console.log(difference)

// Seek and DestroyPassed
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

let destroyer = (...arr) => {
  let range = arr[0]
  let check = arr.splice(1,arr.length)
  let answer = range.filter(arg => !check.includes(arg))
  return answer
}

// Note: You have to use the arguments object.

//   Wherefore art thou
//   Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
  
//   For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.


//   function whatIsInAName(collection, source) {
//     // Only change code below this line
//     var keys = Object.keys(source);
  
//     return collection.filter(obj =>{
//       for (var key of keys){
//         if (!obj.hasOwnProperty(key) || obj[key] !== source[key]){
//           return false
//         }
//       }
//       return true
//     });
//   }

// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
let spinalCase = (str) => {
  //so first i would want to put a space between any lower case and capital case letters next to each other
  //after that i would just wanna replace all spaces and under scores with a dash
  let upperCaseIssue = str.replace(/([a-z])([A-Z])/g,'$1 $2')
  let spaceAndUnderScore = upperCaseIssue.replace(/\s|_/g, '-').toLowerCase()
  return spaceAndUnderScore
}

spinalCase('thisIsSpinalTap');

// Pig Latin
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.
let translatePigLatin = (str) => {
  let splitStr = str.split('')
  let vowels = ['a','e','i','o','u']
  let consonants = []

  if (vowels.includes(splitStr[0])){
    return str + 'way'
  }
  else {
    for (let i = 0; !vowels.includes(splitStr[i]); i++) consonants.push(splitStr[i])
    
    splitStr.splice(0,consonants.length)

    return splitStr.join('') + consonants.join('') + 'ay'
  }
}
// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog
let myReplace = (str, before, after) => {

  if (before.charAt(0) === before.charAt(0).toUpperCase()){
    let upperCase = after.charAt(0).toUpperCase() + after.slice(1)
    return str.replace(before, upperCase)
  }
  else{
    let lowerCase = after.charAt(0).toLowerCase() + after.slice(1)
    return str.replace(before, lowerCase)
  }
}

myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped");

// DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

// Base pairs are a pair of AT and CG. Match the missing element to the provided character.

// Return the provided character as the first element in each array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

let pairElement = (str) => {
  let splitStr = str.split('')
  let answer =[]

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === 'C'){
      answer.push(['C','G'])
    }
    else if(splitStr[i] === 'G'){
      answer.push(['G','C'])
    }
    else if(splitStr[i] === 'T'){
      answer.push(["T",'A'])
    }
    else{
      answer.push(['A','T'])
    }
  }
  return answer;
}

pairElement("GCG");

// Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.function fearNotLetter(str) {
  function fearNotLetter(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let x = alphabet.indexOf(str[0]);
    let y = alphabet.slice(x);
    console.log(y)
    for (let i =0; i < str.length; i++){
      console.log(str[i],y[i])
      if (str[i] != y[i]){
        return y[i]
      }
    }
  }
  fearNotLetter("bcdf");

//   Missing letters
// Find the missing letter in the passed letter range and return it.

// If all letters are present in the range, return undefined.function fearNotLetter(str) {
  function fearNotLetter(str) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let strFirstChar = str.slice(0,1)
    let start = alphabet.slice(alphabet.indexOf(strFirstChar))
  
    for (let i=0; i < str.length; i++){
      if (str.charAt(i) !== start.charAt(i)){
          return start.charAt(i)
      }
    }
  }

//   Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

// Check the assertion tests for examples.

// function uniteUnique(arr) {
//   let fullArr = [];

//   for (let i = 0; i < arguments.length; i++){
//     fullArr.push(arguments[i])
//   };

//   fullArr = fullArr.flat()

//   for (let i = 0; i < fullArr.length; i ++){
//     if (!arr.includes(fullArr[i])){
//       arr.push(fullArr[i])
//     };
//   };
//   return arr
// }


// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
  let fibonacciNumbers = [];
  fibonacciNumbers[0] = 0;
  fibonacciNumbers[1] = 1;

  for (let i = 2; i <= num; i++) fibonacciNumbers[i] = fibonacciNumbers[i-2] + fibonacciNumbers[i-1];
  fibonacciNumbers = fibonacciNumbers.filter(e => e%2 !== 0 & e <= num);

  let sum = 0;
  for (let i = 0; i < fibonacciNumbers.length; i++) sum = sum + fibonacciNumbers[i] 
  return sum
}

// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
  let prime = [];
  let sum = 0

  const isPrime = number => {
  for(let i = 2; i < number; i++)
    if(number % i === 0) return false;
    prime.push(number)
  };

  for (let i = 2; i <= num; i++) isPrime(i)
  
  for (let i = 0; i < prime.length; i++) sum = sum + prime[i];

  return sum;
}

// Use the map Method to Extract Data from an Array
// So far we have learned to use pure functions to avoid side effects in a program. Also, we have seen the value in having a function only depend on its input arguments.

// This is only the beginning. As its name suggests, functional programming is centered around a theory of functions.

// It would make sense to be able to pass them as arguments to other functions, and return a function from another function. Functions are considered first class objects in JavaScript, which means they can be used like any other object. They can be saved in variables, stored in an object, or passed as function arguments.

// Let's start with some simple array functions, which are methods on the array object prototype. In this exercise we are looking at Array.prototype.map(), or more simply map.

// The map method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.

// When the callback is used, it is passed three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the map method was called.

// See below for an example using the map method on the users array to return a new array containing only the names of the users as elements. For simplicity, the example only uses the first argument of the callback.
// The watchList array holds objects with information on several movies. Use map on watchList to assign a new array of objects to the ratings variable. Each movie in the new array should have only a title key with the name of the film, and a rating key with the IMDB rating. The code in the editor currently uses a for loop to do this, so you should replace the loop functionality with your map expression.

// The global variable
var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

var ratings = [];

watchList.map((movie) => ratings.push({title:movie.Title,rating:movie.imdbRating}))
console.log(ratings)
// Only change code above this line
