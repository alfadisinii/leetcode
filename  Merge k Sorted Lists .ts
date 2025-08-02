function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const heap: Array<ListNode> = [];

    // 1. Initialize heap with the first node of each list
    for (const node of lists) {
        if (node !== null) heap.push(node);
    }

    // Heapify helper
    const cmp = (a: ListNode, b: ListNode) => a.val - b.val;
    heap.sort(cmp);

    // Dummy head for result
    let dummy = new ListNode(0);
    let tail = dummy;

    while (heap.length > 0) {
        // Always take node with smallest value
        const node = heap.shift()!;
        tail.next = node;
        tail = tail.next;
        if (node.next !== null) {
            // Insert next node of that list in sorted position
            // (since heap.size <= k and k <= 10^4, using sort is acceptable in practice)
            heap.push(node.next);
            heap.sort(cmp);
        }
    }

    return dummy.next;
}