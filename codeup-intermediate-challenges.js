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

    // Create frequency array freq[]
    var freq = new Array(maxE + 1).fill(0);

    // Update the frequency array as per the occurrence of element in array[]
    for (var i = 0; i < n; i++) {
        freq[arr[i]]++;
    }

    // Initialize cnt to 0;

}