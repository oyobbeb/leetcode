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
    let dummy = head;
    let count = 0;
    let dummyCount = 0;

    while (head) {
        head = head.next;
        count++;
    }

    const middle = count % 2 === 0 ? (count / 2) + 1 : Math.ceil(count / 2);

    while (dummy) {
        if (dummyCount === middle - 1) return dummy;
        dummy = dummy.next;
        dummyCount++;
    }

    return dummy;
};