/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const subset = {};
    const superset = {};

    for (let i = 0; i < ransomNote.length; i++) {
        const stringValue = ransomNote[i];

        if (subset[stringValue]) {
            subset[stringValue]++;
            continue;
        }

        subset[stringValue] = 1;
    }

    for (let i = 0; i < magazine.length; i++) {
        const stringValue = magazine[i];

        if (superset[stringValue]) {
            superset[stringValue]++;
            continue;
        }

        superset[stringValue] = 1;
    }
  
    console.log(subset, superset);

    for (const x in subset) {
        if (!superset[x]) return false;
        if (superset[x] && subset[x] > superset[x]) return false;
    }

    return true;
};