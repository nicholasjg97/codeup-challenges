// Given a string of any length with any characters in it, write a function to determine whether or not the string contains the whole word "english". The order of characters/spelling is important, a string "agkjnenglishsad" would return true while "asdneglihsth" would return false. Upper and lower case does not matter. Return values should be booleans (true/false).

// Examples:
// Input: "FaagdnglishAGG" | Output: false
// Input: "SMFENgliSHasnD" | Output: true

function hasEnglish (string) {

    for (var i = 0; i < string.length; i++) {
        const english = "engish"
        if (string.includes(english)) {
            return true;
        } else {
            return false;
        }
    }
}

// Given an array of integers, write a function that returns an array of 2 integers. The first integer will be the count of the positive integers, and the second integer will be the sum of the negative integers. If the input is empty or null, return an empty array.

// Examples:
// Input: [1, -6, 5, 4, 3, -7, -10, 201, -3] | Output: [5, -26]
// Input: null | Output: []

function arrays (array) {

    var positiveArr = 0;
    var negativeArr = 0;
    var outputArr = []

    for (var i = 0; i < array.length; i++) {
        if (i == null || i == []) {
            return negativeArr;
        }
        if (i > 0) {
            positiveArr++;
        } else if (i < 0) {
            negativeArr += array[i];
        }
    }
    return outputArr[positiveArr, negativeArr];
}

// Write a function that translates an input string by replacing each character with a number representing the amount of times that character appears in the string. Then separate each individual number with a different character.

// Examples:
// Input: "hello world", "-" | Output: "1-1-3-3-2-1-1-2-1-3-1"
// Input: "challenge", "/" | Output: "1/1/1/2/2/2/1/1/2"

function inputCount (string) {

    var timesOutput = "";
    for (var i = 0; i < string.length; i++) {

    }
}

// Write a function to calculate a person’s age based on the date entered in the format MM/DD/YYYY.

// Example:
// Input: 11/04/1982
// Output: 34

function calcAge () {

    var userInput = prompt("Please enter your age in MM/DD/YYYY please!");
    var age = (userInput - 2022) * -1;
    return age;
}

// Write a function to remove these special characters from a string: ~,!,$,&,%, ,#,@,-,_,^,? (yes, "space" is a character in that list)

// Examples:
// Input: "Happy ~!&$%#@- Halloween" | Output: "HappyHalloween"
// Input: "I’ll bet living in a nudist-colony takes all the fun out of Halloween!!" | Output: "IllbetlivinginanudistcolonytakesallthefunoutofHalloween"

function noSpecials (string) {
    string.replace(/[^a-zA-Z0-9]/g, '');
    return string;
}

// Write a function to convert a string into an array of words.

// Example:
// Input: "Trick or Treat"
// Output: [‘Trick’, ‘or’, ‘Treat’]

function splice (string) {
    return string.trim().split(" ");
};

// Write a function called "multiply" that takes two integers and returns the product. You are NOT allowed to use the * operator or any imported multiplication function. We will check your code.

// Example:
// Input: multiply(5, 6) | Output: 30
// Input: multiply(-1, 15) | Output: -15
// Input: multiply(-2, -7) | Output: 14

function multiply (a, b){
    return ("i").repeat(a).repeat(b).length;
}

// Write a function that takes a string and returns true if all of the characters are the same case, false otherwise.

// Examples:
// Input: "hello world" | Output: true
// Input: "HELLO WORLD" | Output: true
// Input: "HeLLo wORld" | Output: false

function sameCase (string) {

    for (var i = 0; i < string .length; i++) {
        if (string[i] === string[i].toUpperCase()) {
            return true;
        } else if (string[i] === string[i].toLowerCase()) {
            return true;
        } else {
            return false;
        }
    }
}

// Write a function that takes an array of integers and returns an array of integers where each number is the sum of itself and all of the previous numbers in the array.

// Example:
// Input: [1, 1, 1] | Output: [1, 2, 3]
// Input: [4, 2, 1, 3, 5] | Output: [4, 6, 7, 10, 15]

function arrayAdd (array) {

    for (var i = 0; i < array.length; i++) {
        // if (i < 1) return 0;    // exit condition
    // return n  + sum(n - 1); 
    // tricky question
    }
}

// Write a function that takes a phone number with letters in it and converts it to one with only numbers. All input phone numbers will follow this pattern: "###-###-####" (Hint: Search for "phone keypad")

// Examples:
// Input: 210-367-CODE | Output: 210-367-2633
// Input: TRY-THE-FOOD | Output: 879-843-3663

function phoneNum (e) {

    var input = this.value.toLowerCase();
    var map = [' ',,'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'], out = [];

    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < map.length; j++) {
            if (map[j] && map[j].indexOf(v[i]) > -1) {
                out.push(j);
                break;
            }
        }
        return out;
    }
    // https://stackoverflow.com/questions/14818204/how-to-convert-letters-to-numbers-in-javascript
}