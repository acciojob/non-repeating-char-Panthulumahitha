function firstNonRepeatedChar(str) {
    // Object to store character counts
    const charCount = {};

    // Count the occurrences of each character
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Iterate through the string to find the first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

// Example usage
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
