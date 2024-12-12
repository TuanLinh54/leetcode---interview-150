var lengthOfLastWord = function (s) {
    s = s.trim();

    const words = s.split(" ")

    return words[words.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"));           // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy"));  // Output: 6