// Given a string of any length with any characters in it, write a function to determine whether or not the string contains the whole word "english". The order of characters/spelling is important, a string "agkjnenglishsad" would return true while "asdneglihsth" would return false. Upper and lower case does not matter. Return values should be booleans (true/false).

// Examples:
// Input: "FaagdnglishAGG" | Output: false
// Input: "SMFENgliSHasnD" | Output: true

function hasEnglish (string) {

    for (var i = 0; i < string.length; i++) {
        if (string == "english") {
            return true;
        }
        return false;
    }
}

// Given an array of integers, write a function that returns an array of 2 integers. The first integer will be the count of the positive integers, and the second integer will be the sum of the negative integers. If the input is empty or null, return an empty array.

// Examples:
// Input: [1, -6, 5, 4, 3, -7, -10, 201, -3] | Output: [5, -26]
// Input: null | Output: []

function arrays (array) {

    var positiveArr = 0;
    var negativeArr = [];

    for (var i = 0; i < array.length; i++) {
        if (i > 0) {
            positiveArr++;
        } else if (i < 0) {
            negativeArr += i;
        }
    }
}
