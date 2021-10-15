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

a = ["andesite", "grass", "dirt", "pink wool", "dead shrub"]
b = ["diorite", "andesite", "grass", "dirt", "dead shrub"]

let difference = a.filter(c => !b.includes(c)).concat(b.filter(c => !a.includes(c)));
console.log(difference)