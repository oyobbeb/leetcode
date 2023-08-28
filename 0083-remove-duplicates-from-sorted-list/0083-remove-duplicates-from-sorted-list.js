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
  if (!head) return null;

  let currentNode = head;

  while (currentNode.next !== null) {
    if (currentNode.val === currentNode.next.val) {
      currentNode.next = currentNode.next.next;
      continue;
    }

    currentNode = currentNode.next;
  }

  return head;
};