/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  /**
  * Time Complexity: O(N + M)
  * Space Complexity: O(N + M)
  */

  let str1 = '';
  let str2 = '';

  while (l1) {
    str1 = l1.val + str1;
    l1 = l1.next;
  }

  while (l2) {
    str2 = l2.val + str2;
    l2 = l2.next;
  }

  const addNumbers = String(BigInt(str1) + BigInt(str2));

  const result = new ListNode(0);
  let currentNode = result;

  for (let i = addNumbers.length - 1; i >= 0; i--) {
    currentNode.next = new ListNode(Number(addNumbers[i]));
    currentNode = currentNode.next;
  }

  return result.next;
};