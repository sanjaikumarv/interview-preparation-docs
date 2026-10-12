// console.log(addNumbers([1, 2, 4], [2, 3, 4]));

function ListNode(val = 0, next = null) {
  this.val = val;
  this.next = next;
}

// Convert an array into a linked list

function createLinkedList(arr) {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }
  return dummy.next;
}

// Add two numbers represented by linked lists
function addTwoNumbers(l1, l2) {
  const dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 !== null || l2 !== null || carry > 0) {
    const x = l1 ? l1.val : 0;
    const y = l2 ? l2.val : 0;

    const sum = x + y + carry;
    carry = Math.floor(sum / 10);

    current.next = new ListNode(sum % 10);
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return dummy.next;
}

// Convert a linked list into an array for display
function linkedListToArray(head) {
  const result = [];

  while (head !== null) {
    result.push(head.val);
    head = head.next;
  }

  return result;
}

// Example: 342 + 465 = 807
const l1 = createLinkedList([2, 4, 3]);
const l2 = createLinkedList([5, 6, 4]);

const result = addTwoNumbers(l1, l2);
