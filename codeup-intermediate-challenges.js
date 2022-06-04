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