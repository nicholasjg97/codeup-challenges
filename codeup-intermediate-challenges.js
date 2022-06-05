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