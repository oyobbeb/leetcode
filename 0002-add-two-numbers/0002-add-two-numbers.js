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
  const reversedString = [...addNumbers].reverse().join('');

  const dummy = new ListNode(0);
  let current = dummy;
  let i = 0;

  while (i < reversedString.length) {
    current.next = new ListNode(reversedString[i]);
    current = current.next;
    i++;
  }

  return dummy.next;
};