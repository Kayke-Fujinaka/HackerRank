interface ListNode<T> {
  value: T
  next?: ListNode<T>
}

function reverseLinkedList<T>(head: ListNode<T>) {
  let current: ListNode<T> | undefined = head
  let prev: ListNode<T> | undefined

  while (current) {
    const next: ListNode<T> | undefined = current.next
    current.next = prev
    prev = current
    current = next
  }

  return prev
}

const myList: ListNode<number> = {
  value: 1,
  next: {
    value: 2,
    next: undefined,
  },
}

console.log(reverseLinkedList(myList))
