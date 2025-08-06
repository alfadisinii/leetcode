

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    if (!head || k === 1) {
        return head;
    }
    
    // Count total nodes first
    let count = 0;
    let curr: ListNode | null = head;
    while (curr) {
        count++;
        curr = curr.next;
    }
    
    const dummy = new ListNode(0);
    dummy.next = head;
    let prevGroupTail: ListNode = dummy;
    
    while (count >= k && prevGroupTail.next) {
        const groupHead: ListNode = prevGroupTail.next;
        
        // Reverse k nodes
        let prev: ListNode | null = null;
        curr = groupHead;
        
        for (let i = 0; i < k && curr; i++) {
            const nextNode: ListNode | null = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        
        // Connect the groups
        if (prev) {
            prevGroupTail.next = prev;      // prev is the new head
            groupHead.next = curr;          // groupHead is now the tail
            prevGroupTail = groupHead;
        }
        
        count -= k;
    }
    
    return dummy.next;
}

// Helper functions remain the same
function createLinkedList(arr: number[]): ListNode | null {
    if (arr.length === 0) return null;
    
    const head = new ListNode(arr[0]);
    let curr: ListNode = head;
    
    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    
    return head;
}

function linkedListToArray(head: ListNode | null): number[] {
    const result: number[] = [];
    let curr: ListNode | null = head;
    
    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }
    
    return result;
}

// Test cases
const test1 = createLinkedList([1, 2, 3, 4, 5]);
const result1 = reverseKGroup(test1, 2);
console.log(linkedListToArray(result1)); // [2, 1, 4, 3, 5]

const test2 = createLinkedList([1, 2, 3, 4, 5]);
const result2 = reverseKGroup(test2, 3);
console.log(linkedListToArray(result2)); // [3, 2, 1, 4, 5]