// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    let answer = []
    
    str.split('').map(element => {

      if(alphabet.includes(element) === false){
        answer.push(element)

      } else {
          let index = alphabet.indexOf(element)
          index + 13 >=26 ? answer.push(alphabet[index-13]) : answer.push(alphabet[index+13])
          
        }
    })
  
    return answer.join('');
  }
  
  rot13("SERR PBQR PNZC");

//   Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

//first I would have to get rid of any of - or  () so its just numbers
//then I would check the length
// if its 7 then we wanna loop through and make sure they are all numbers <0 to be true
//if its 8 AND the first number is 1 then we can loop through and make sure they are all numbers <= 0 to be true
//any length smaller than 7 or greater than 8 return false

//actualy i can just use regex here since we are going to be checking for certain digits and optional symbols in a string
function telephoneCheck(str) {
  let regex = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;

  return regex.test(str)

}

telephoneCheck("(555-555-5555");
