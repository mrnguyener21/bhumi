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

// Implement map on a Prototype
// As you have seen from applying Array.prototype.map(), or simply map() earlier, the map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't.

// In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

// You might learn a lot about the map method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++){
    newArray.push(callback(this[i]))
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});

// Use the filter Method to Extract Data from an Array
// Another useful array function is Array.prototype.filter(), or simply filter().

// filter calls a function on each element of an array and returns a new array containing only the elements for which that function returns true. In other words, it filters the array, based on the function passed to it. Like map, it does this without needing to modify the original array.

// The callback function accepts three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the filter method was called.

// See below for an example using the filter method on the users array to return a new array containing only the users under the age of 30. For simplicity, the example only uses the first argument of the callback.
// The variable watchList holds an array of objects with information on several movies. Use a combination of filter and map on watchList to assign a new array of objects with only title and rating keys. The new array should only include objects where imdbRating is greater than or equal to 8.0. Note that the rating values are saved as strings in the object and you may need to convert them into numbers to perform mathematical operations on them.
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

var filteredList = [];
watchList.map(movie => filteredList.push({title:movie.Title, rating:movie.imdbRating}))
filteredList = filteredList.filter(movie => movie.rating >= 8)
// Only change code above this line

console.log(filteredList);

// Implement the filter Method on a Prototype
// You might learn a lot about the filter method if you implement your own version of it. It is recommended you use a for loop or Array.prototype.forEach().

// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.

// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  for (let i = 0; i < this.length; i++) if (this[i] < 98) newArray.push(this[i])
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});

// Return Part of an Array Using the slice Method
// The slice method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The slice method does not mutate the original array, but returns a new one.

// Here's an example:

// var arr = ["Cat", "Dog", "Tiger", "Zebra"];
// var newArray = arr.slice(1, 3);
// newArray would have the value ["Dog", "Tiger"].

// Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line
  return anim.slice(beginSlice,endSlice)
  // Only change code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
console.log(sliceArray)

// Remove Elements from an Array Using slice Instead of splice
// A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers the splice method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the splice method mutates the original array it is called on. Here's an example:

// var cities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
// cities.splice(3, 1);
// Here splice returns the string London and deletes it from the cities array. cities will have the value ["Chicago", "Delhi", "Islamabad", "Berlin"].

// As we saw in the last challenge, the slice method does not mutate the original array, but returns a new one which can be saved into a variable. Recall that the slice method takes two arguments for the indices to begin and end the slice (the end is non-inclusive), and returns those items in a new array. Using the slice method instead of splice helps to avoid any array-mutating side effects.

// Rewrite the function nonMutatingSplice by using slice instead of splice. It should limit the provided cities array to a length of 3, and return a new array with only the first three items.

// Do not mutate the original array provided to the function.

function nonMutatingSplice(cities) {
  // Only change code below this line
  let newArr = cities.slice(0,3);
  return newArr
  // Only change code above this line
}
var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);

// Combine Two Arrays Using the concat Method
// Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. Here's an example:

// [1, 2, 3].concat([4, 5, 6]);
// The returned array would be [1, 2, 3, 4, 5, 6].

// Use the concat method in the nonMutatingConcat function to concatenate attach to the end of original. The function should return the concatenated array.

function nonMutatingConcat(original, attach) {
  // Only change code below this line
  return original.concat(attach)

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

// Add Elements to the End of an Array Using concat Instead of push
// Functional programming is all about creating and using non-mutating functions.

// The last challenge introduced the concat method as a way to combine arrays into a new one without mutating the original arrays. Compare concat to the push method. push adds an item to the end of the same array it is called on, which mutates that array. Here's an example:

// var arr = [1, 2, 3];
// arr.push([4, 5, 6]);
// arr would have a modified value of [1, 2, 3, [4, 5, 6]], which is not the functional programming way.

// concat offers a way to add new items to the end of an array without any mutating side effects.

// Change the nonMutatingPush function so it uses concat to add newItem to the end of original instead of push. The function should return an array.

function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

// Use the reduce Method to Analyze Data
// Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. You can solve almost any array processing problem using the reduce method.

// The reduce method allows for more general forms of array processing, and it's possible to show that both filter and map can be derived as special applications of reduce. The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.

// The callback function accepts four arguments. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which reduce is called.

// In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator. If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.

// See below for an example using reduce on the users array to return the sum of all the users' ages. For simplicity, the example only uses the first and second arguments.

// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

// const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
// console.log(sumOfAges);
// The console would display the value 64.

// In another example, see how an object can be returned containing the names of the users as properties with their ages as values.

// const users = [
//   { name: 'John', age: 34 },
//   { name: 'Amy', age: 20 },
//   { name: 'camperCat', age: 10 }
// ];

// const usersObj = users.reduce((obj, user) => {
//   obj[user.name] = user.age;
//   return obj;
// }, {});
// console.log(usersObj);
// The console would display the value { John: 34, Amy: 20, camperCat: 10 }.

// The variable watchList holds an array of objects with information on several movies. Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. Recall from prior challenges how to filter data and map over it to pull what you need. You may need to create other variables, and return the average rating from getRating function. Note that the rating values are saved as strings in the object and need to be converted into numbers before they are used in any mathematical operations.
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

function getRating(watchList){
  // Only change code below this line
  var averageRating = []
  watchList.map(movie => { if (movie.Director === 'Christopher Nolan') averageRating.push(Number(movie.imdbRating))})
  averageRating = averageRating.reduce((current,next) => current + next)/averageRating.length
  // Only change code above this line
  return averageRating;
}

// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
// Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.

// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or while loops or the forEach() function.
const squareList = (arr) => {
  // Only change code below this line
  //return only the squared values of the positive integers
  let filteredArr = arr.filter(value => {if (value > 0 & value % 1 === 0) return true})
  return filteredArr.map(value => value * value);
  // Only change code above this line
};

// const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
// console.log(squaredIntegers);

// Sort an Array Alphabetically using the sort Method
// The sort method sorts the elements of an array according to the callback function.

// For example:

// function ascendingOrder(arr) {
//   return arr.sort(function(a, b) {
//     return a - b;
//   });
// }
// ascendingOrder([1, 5, 2, 3, 4]);
// This would return the value [1, 2, 3, 4, 5].

// function reverseAlpha(arr) {
//   return arr.sort(function(a, b) {
//     return a === b ? 0 : a < b ? 1 : -1;
//   });
// }
// reverseAlpha(['l', 'h', 'z', 'b', 's']);
// This would return the value ['z', 's', 'l', 'h', 'b'].

// JavaScript's default sorting method is by string Unicode point value, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called compareFunction, is supplied, the array elements are sorted according to the return value of the compareFunction: If compareFunction(a,b) returns a value less than 0 for two elements a and b, then a will come before b. If compareFunction(a,b) returns a value greater than 0 for two elements a and b, then b will come before a. If compareFunction(a,b) returns a value equal to 0 for two elements a and b, then a and b will remain unchanged.

// Use the sort method in the alphabeticalOrder function to sort the elements of arr in alphabetical order. The function should return the sorted array.
function alphabeticalOrder(arr) {
  // Only change code below this line
  
  return arr.sort()
  // Only change code above this line
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// Return a Sorted Array Without Changing the Original Array
// A side effect of the sort method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that slice and concat return a new array), then run the sort method.

// Use the sort method in the nonMutatingSort function to sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable.
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // Only change code below this line
  let newArr = arr.slice(0,arr.length)
  return newArr.sort((a,b) => a-b)
  // Only change code above this line
}
nonMutatingSort(globalArray);
console.log(nonMutatingSort(globalArray))

// Split a String into an Array Using the split Method
// The split method splits a string into an array of strings. It takes an argument for the delimiter, which can be a character to use to break up the string or a regular expression. For example, if the delimiter is a space, you get an array of words, and if the delimiter is an empty string, you get an array of each character in the string.

// Here are two examples that split one string by spaces, then another by digits using a regular expression:

// var str = "Hello World";
// var bySpace = str.split(" ");

// var otherString = "How9are7you2today";
// var byDigits = otherString.split(/\d/);
// bySpace would have the value ["Hello", "World"] and byDigits would have the value ["How", "are", "you", "today"].

// Since strings are immutable, the split method makes it easier to work with them.

// Use the split method inside the splitify function to split str into an array of words. The function should return the array. Note that the words are not always separated by spaces, and the array should not contain punctuation.
function splitify(str) {
  // Only change code below this line
  return str.split(/\W/)

  // Only change code above this line
}
splitify("Hello World,I-am code");

// Combine an Array into a String Using the join Method
// The join method is used to join the elements of an array together to create a string. It takes an argument for the delimiter that is used to separate the array elements in the string.

// Here's an example:

// var arr = ["Hello", "World"];
// var str = arr.join(" ");
// str would have a value of the string Hello World.

// Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. For this challenge, do not use the replace method.

function sentensify(str) {
  // Only change code below this line

  return str.split(/\W/).join(' ')

  // Only change code above this line
}
sentensify("May-the-force-be-with-you");


// Smallest Common Multiple
// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.
function smallestCommons(arr) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let lcm = 1;

  let lcmFormula = (a,b) => {for (let i = b; i <= a*b; i+=b) if( i%a === 0) return i}  

  for (let i = min; i <= max; i++) lcm = lcmFormula(lcm,i)
  
  return lcm
}


smallestCommons([23,18]);

// Drop it
// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.

function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i ++){
    if (func(arr[i]) === true) {
      arr.splice(0, i)
      return arr
    }
      else if (arr.every(number => func(number) === false)) return []
  }
}

dropElements([1, 2, 3, 4], function(n) {return n > 5;});

// Steamroller
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  let answer = []

  for (let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i]) === true){
      arr[i].map(element => {
        if (typeof(element) === 'number'){
        answer.push(element)
        } else if (typeof(element) === 'object'){
            answer.push(element[0][0])
        }
      })
    } else if (typeof(arr[i]) === 'object'){
      answer.push(arr[i])
    }
    else{
      answer.push(arr[i])
    }
  }
  return answer;
}

// Binary Agents
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

function binaryAgent(str) {
  let code = str.split(' ')
  let translated = []
  for (let i =0; i < code.length; i++){
  translated.push(String.fromCharCode(parseInt(code[i], 2)))
  }
  return translated.join('');
}