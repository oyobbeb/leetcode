/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
  // const result = [];
  // let arr1Remaining = [...arr1];

  // for (const num of arr2) {
  //   const occurrences = arr1.filter(x => x === num);
  //   result.push(...occurrences);
    
  //   arr1Remaining = arr1Remaining.filter(x => x !== num);
  // }

  // arr1Remaining.sort((a, b) => a - b);
  // result.push(...arr1Remaining);

  // return result;

  // arr1.sort((a, b) => {
  //   const findFirstValueInArr2 = arr2.indexOf(a) === -1 ? arr1.length + a : arr2.indexOf(a);
  //   const findSecondValueInArr2 = arr2.indexOf(b) === -1 ? arr1.length + b : arr2.indexOf(b);

  //   return findFirstValueInArr2 - findSecondValueInArr2;
  // });

  // return arr1;

  const map = new Map();
    
  for (let i = 0 ; i < arr2.length; i++) {
    map.set(arr2[i], i);
  }

  arr1.sort((a, b) => {
    const firstValue = !map.has(a) ? arr1.length + a : map.get(a);
    const secondValue = !map.has(b) ? arr1.length + b : map.get(b);

    return firstValue - secondValue;
  })
  
  return arr1;
};