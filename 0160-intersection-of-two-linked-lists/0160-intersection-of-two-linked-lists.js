/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let lengthA = getLength(headA);
  let lengthB = getLength(headB);

  while (lengthA > lengthB) {
    headA = headA.next;
    lengthA--;
  }

  while (lengthB > lengthA) {
    headB = headB.next;
    lengthB--;
  }

  while (headA && headB) {
    if (headA === headB) return headA;

    headA = headA.next;
    headB = headB.next;
  }

  return null;
};

function getLength(head) {
  let length = 0;

  while (head) {
    length++;
    head = head.next;
  }

  return length;
}