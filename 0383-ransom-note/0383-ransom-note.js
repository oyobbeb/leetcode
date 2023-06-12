/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) {
        return false;
    }

    let magazineCopy = magazine;

    for (const character of ransomNote) {
        if (magazineCopy.indexOf(character) !== -1) {
            magazineCopy = magazineCopy.replace(character, "");
            continue;
        }
    
        return false;
    }

    return true;
};