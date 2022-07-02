// Write a function that sorts a string in decreasing order based on the frequency of the characters within it.

// Examples:
// Input: "bee" | Output:"eeb"
// Input: "Abaaacdb" | Output: "aaabbAcd"

function decFreq(string = '') {
    const charFreqMap = {};

    for (var i = 0; i < string.length; i++) {
       const char = string[i];
       const isCharInCharMap = Boolean(charFreqMap[char]);
       charFreqMap[char] = isCharInCharMap ? charFreqMap[char] + 1 : 1;
    }

    const charArray = [];
    for (let char in charFreqMap) {
        const frequency = charFreqMap[char];
        const extrapolatedString = char.repeat(frequency);
    }
    charArray.sort((a, b) => b.length - a.length);

    return charArray.join('');
}

// Return the length of the longest possible palindrome within a given string.

// Examples:
// Input: "bbadbb" | Output:5 (bbabb or bbdbb)
// Input: "bcd" | Output: 1 (b, c, or d)

function longestPalindrome(s) {
    if (s.length < 1) return "";
    let maxSubStart = 0;
    let maxSubLength = 0;
    for (let i = 0; i < s.length; i++) {
      const lengthCenteredAtChar = expandAroundCenter(s, i, i);
      const lengthCenteredAtSpace = expandAroundCenter(s, i, i + 1);
      const longestSubAtChar = Math.max(lengthCenteredAtChar, lengthCenteredAtSpace)
      if (longestSubAtChar > maxSubLength) {
        maxSubLength = longestSubAtChar;
        maxSubStart = i - Math.floor((maxSubLength - 1) / 2);
      }
    }
    return s.substr(maxSubStart, maxSubLength);
  }
  
//   https://dev.to/alisabaj/the-longest-palindromic-substring-solving-the-problem-using-constant-space-1bch

  function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }

  // Write a function that finds the least number of perfect squares that add up to the given integer

  // Examples:
// Input: 12 | Output:3 (4 + 4 + 4)
// Input: 13 | Output: 2 (4 + 9)



// Write a function that will divide two integers without using the multiplication, division, or modulo operators

function divide (a, b) {

  var dividend = a;
  var divisor = b;

  // Calculate sign of divisor
  var sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;

  // Remove signs
  dividend = Math.abs(dividend);
  divisor = Math.abs(divisor);

  // Zero division exception
  if (divisor == 0) {
    alert("Cannot divide by 0");
    return;
  }

  if (dividend == 0) {
    alert(a + ' / ' + b + " is equal to : " + 0 );
    return;
  }

  if (divisor == 1) {
    alert(a + " / " + b + " is equal to : " + sign * dividend)
    return;
  }

  alert(a + " / " + b + " is equal to : " + Math.floor(sign * (Math.exp(Math.log(dividend) - Math.log(divisor)))) + "<br>");
}

// Return the integer equivalent of a given Roman numeral string. (Max = 1000)

// Example:
// Input: XXIV | Output: 24

function romanNum (string) {
  const conversion = {"M": 1000, "D": 500, "C": 100, "L": 50, "X": 10, "V": 5, "I": 1};

  const array = string.split('');

  let total = 0;
  let current;
  let currentValue;
  let next;
  let nextValue;

  for (let i = 0; i < array.length; i++) {
    current = array[i];
    currentValue = conversion[current];

    next = array[i+1];
    nextValue = conversion[next];

    if (currentValue < nextValue) {
      total -= (currentValue);
    } else {
      total += (currentValue);
    }
  }
  return total;
}

// Given an integer parameter, write a function that will return the next greater number using the same digits.

// Example:
// Input: 230 | Output: 302
// https://www.geeksforgeeks.org/find-next-greater-number-set-digits/
// Question is a bit complicated

function sameNumsHigher (int, n) {
  for (var i = n - 1; i >= 0; i--) {
    if (int[i] > int[i - 1]){
      break;
    }
  }

  if (i == 1 && int[i] <= int[i - 1]) {
    alert("Next number not possible");
  }

  
}

// Write a function that determines whether or not a given string is a valid password. A password must follow these rules:

// It must have a capital letter.

// It must have at least one number.

// It must contain a punctuation mark.

// It cannot have the word "password" in it.

// It must be longer than 7 characters and shorter than 21 characters.

// Examples:
// Input: passWord101! | Output: false
// Input: codE35? | Output: true

// https://stackoverflow.com/questions/62727011/javascript-functions-that-validates-password-coderbyte-coding-challenge-simple

function password (input) {

  let capitalCheck = /[A-Z]/g.test(input);
  let numberCheck = /[0-9]/g.test(input);
  let punctuationCheck = /[.?!:,;]/g.test(input);
  let passwordCheck = !/password/gi.test(input);
  let charCheck = input.length > 7 && input.length < 21;

  return charCheck && punctuationCheck && passwordCheck && numberCheck && capitalCheck;
}

// Write a function that capitalizes the first letter of each word in a string.

// https://www.freecodecamp.org/news/how-to-capitalize-words-in-javascript/#:~:text=In%20JavaScript%2C%20we%20have%20a,%22%3B%20publication%5B0%5D.

function capWords (string) {

  const words = sting.split(" ");

  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words.substr(1);
  }

  words.join(" ");
}

// Write a function that changes every letter in a string to the next letter in the alphabet. Capital letters must remain capitalized.

function nextLetter (str) {

  return str.replace(/[a-zA-Z]/g, function (x) {
    return String.fromCharCode(x.charCodeAt(0)+1);
  });
}

// Build a pyramid using the characters from a given string.

function pyramid (str) {

  for (var i = 1; i <= str; i++) {
    let string = ' '.repeat(str - i);
    let string2 = '*'.repeat(i * 2 - 1);
  }
}

// Given an integer, determine whether or not the number is a perfect square.

// Examples:
// Input: 3 | Output:false
// Input: 25 | Output: true

function square (int) {

  if (Math.ceil(Math.sqrt(int)) == Math.floor(Math.sqrt(int))) {
    return true;
  } else {
    return false;
  }
}

// Write a function that takes a single string as its argument and returns an ordered list of the indexes of all capital letters in the string. Assume that all input will have at least one capital letter.

// Example:
// Input: HelLO | Output:0,3,4
// Input: codinG | Output: 5

function capCount (str) {

  var list = [];
  if (str.split(" ").length > 1) {
    alert("Too many words");
  } else {
    for (var i = 0; i < str.length; i++) {
      if (str[i] == str[i].toUpperCase()) {
        list.push(i);
      }
    }
  }
  return list;
}

// ATMs only allow for 4 or 6 digit PINs. These PINs can only contain integers. Write a function that takes a PIN and checks to see if it is valid.

// Example:
// Input: 8472 | Output:true
// Input: 76a1 | Output: false

function validPIN (int) {
  
  return typeof int === 'string' && 
  Number.isInteger(+int) && 
  [4, 6].includes(pin.length);
}

// Determine whether or not a word is an anagram of another. Return true if it is, and false if it is not.

// Example:
// Input: deco, code | Output:true
// Input: last, nope | Output: false

function anagram (str1, str2) {

  let firstWord = str1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')
  let secondWord = str2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')

  return (firstWord === secondWord);
}

// Write a function that returns the shortest word in a string. Ignore punctuation. If there are two or more words that are the same length, return the LAST word from the string with that length.
// a. Input: "My phone battery is always dead"
//     Answer: is
// b. Input: "Travis wears a parka in the office"
//     Answer: a

function shortestWord (string) {

  const strArr = string.split(" ");
  const orderArr = strArr.sort((a, b) => {
    return a.length - b.length;
  })
  return orderArr[0];
}

// Write a function to find the TWO highest values in an array..
// a.  Example [ 12, 34, 56, 1 ]
//     Answer: 34, 56
// b.  Example[ 0, -12,-34, -50,-1 ]
//     Answer: 0, -1

function twoHighest (arr) {


  arr.sort((firstNum, secondNum) => {
    firstNum - secondNum;
  });
  const firstHigh = arr.length - 1;
  const secondHigh = arr.length - 2;

  return [firstHigh, secondHigh];
}

// Write a function to get the least common denominator (LCD) of an array of numbers.
// a. Example: [ 1, 1/2, 3/8, 5/6, 3 ]
//     Answer: 24
// b.  Example: [ 1/3, 5/6, 12/60 ]
//     Answer: 60

function LCD (arr) {

  var r1 = 0;
  var r2 = 0;
  var l = arr.length;

  for (var i = 0; i < l; i++) {

    r1 = arr[i] % arr[i + 1];
    if(r1 === 0) {
      arr[i + 1] = (arr[i] * input_array[i+1]) / arr[i + 1];
    } else {
      r2 = arr[i + 1] % r1;
      if(r2 === 0) {
          arr[i + 1] = (arr[i] * arr[i + 1]) / r1;
      }
      else {
          arr[i+1] = (arr[i] * arr[i + 1]) / r2;
      }
    }
  }
  return arr[l - 1];
}

// Write a function to find the TWO highest values in an array..
// a.  Example [ 12, 34, 56, 1 ]
//     Answer: 34, 56
// b.  Example[ 0, -12,-34, -50,-1 ]
//     Answer: 0, -1

function highestValues (arr) {

  arr.sort();
  firstLargestNumber = arr.length - 1
  secondLargestNumber = arr.length - 2;
  return (firstLargestNumber, secondLargestNumber);
}