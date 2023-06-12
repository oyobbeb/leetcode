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
var reverseList = function(head) {
    if (!head || !head.next) return head; 
    return reverseConnection(head); 
};

function reverseConnection(head) {
    if (!head.next) return head;
    const lastNode = reverseConnection(head.next)
    head.next.next = head;
    head.next = null;
    return lastNode;
}
