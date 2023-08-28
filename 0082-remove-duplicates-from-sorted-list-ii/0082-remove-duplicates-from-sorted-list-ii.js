/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  /**
  * Time Complexity: O(n)
  * Space Complexity: O(1)
  */
  const dummy = new ListNode(0)
  dummy.next = head;

  let prev = dummy;
  let currentNode = head;

  while (currentNode) {
    while (currentNode.next && currentNode.val === currentNode.next.val) {
      currentNode = currentNode.next
    }

    if (prev.next === currentNode) {
      prev = currentNode
    } else {
      prev.next = currentNode.next
    }

    currentNode = currentNode.next
  }

  return dummy.next;
};