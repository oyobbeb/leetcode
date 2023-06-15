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
var middleNode = function(head) {
    const nodeArray = [];

    let node = head;

    while (node) {
        nodeArray.push(node);
        node = node.next;
    }

    const index = Math.floor(nodeArray.length / 2);

    return nodeArray[index] || null;
};