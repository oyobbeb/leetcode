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
  /**
  const nodeMap = new Map();

  while (headA || headB) {
    if (headA) {
      if (nodeMap.has(headA)) return headA;

      nodeMap.set(headA, true);
      headA = headA.next;
    }

    if (headB) {
      if (nodeMap.has(headB)) return headB;

      nodeMap.set(headB, true);
      headB = headB.next;
    }
  }

  * Time Complexity: O(n + m)
  * Space Complexity: O(1)
  */

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