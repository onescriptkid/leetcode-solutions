/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  if (!s || !words.length) return [];

  const wordLen = words[0].length;
  const totalLen = wordLen * words.length;
  const freq = {};

  for (let w of words) freq[w] = (freq[w] || 0) + 1;

  const res = [];

  // Try each offset within [0, wordLen)
  for (let offset = 0; offset < wordLen; offset++) {
    let left = offset;
    let right = offset;
    let seen = {};
    let count = 0;

    while (right + wordLen <= s.length) {
      const word = s.slice(right, right + wordLen);
      right += wordLen;

      if (freq[word]) {
        seen[word] = (seen[word] || 0) + 1;
        count++;

        // Too many occurrences of a word → shrink window
        while (seen[word] > freq[word]) {
          const leftWord = s.slice(left, left + wordLen);
          seen[leftWord]--;
          left += wordLen;
          count--;
        }

        // Found valid concatenation
        if (count === words.length) res.push(left);
      } else {
        // Reset window if invalid word
        seen = {};
        count = 0;
        left = right;
      }
    }
  }

  return res;
};