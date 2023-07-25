from typing import Any

class ListNode:
    def __init__(self, element: Any, next: 'ListNode'):
        self.val: Any = element
        self.next: ListNode = next

class LinkedList:
	def __init__(self):
		self._head: ListNode = None
		self._size: int = 0

	def __len__(self) -> int:
		return self._size

	def is_empty(self) -> bool:
		return self._size == 0

	def push(self, e: Any):
		self._head = ListNode(e, self._head)
		self._size += 1

	def top(self) -> ListNode:
		if self.is_empty():
			raise Empty('Stack is empty')
		return self._head.val

	def pop(self) -> Any:
		if self.is_empty():
			raise Empty('Stack is empty')
		answer = self._head.val
		self._head = self._head.next
		self._size -= 1
		return answer
