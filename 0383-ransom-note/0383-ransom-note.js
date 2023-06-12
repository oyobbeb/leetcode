/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let dupRansomNote = ransomNote;

    for (const char of magazine) {
        dupRansomNote = dupRansomNote.replace(char, "");
    }

    if (!dupRansomNote) return true;
    return false;
};