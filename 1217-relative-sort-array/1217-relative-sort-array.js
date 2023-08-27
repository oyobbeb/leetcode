/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  const result = [];
  let arr1Remaining = [...arr1];

  for (const num of arr2) {
    const occurrences = arr1.filter(x => x === num);
    result.push(...occurrences);
    
    arr1Remaining = arr1Remaining.filter(x => x !== num);
  }

  arr1Remaining.sort((a, b) => a - b);
  result.push(...arr1Remaining);

  return result;


  arr1.sort((a, b) => {
    const findFirstValueInArr2 = arr2.indexOf(a) === -1 ? arr1.length + a : arr2.indexOf(a);
    const findSecondValueInArr2 = arr2.indexOf(b) === -1 ? arr1.length + b : arr2.indexOf(b);

    return findFirstValueInArr2 - findSecondValueInArr2;
  });

  return arr1;
};