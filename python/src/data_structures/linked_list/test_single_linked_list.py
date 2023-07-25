import pytest

from single_linked_list import LinkedList

class TestLinkedList():

	@pytest.mark.parametrize("test_input,expected", [("3+5", 8), ("2+4", 6),
	                                                 ("6*9", 54)])
	def test_push_and_pop(self, test_input, expected):
		# Arrange
		linkedList = LinkedList()
		linkedList.push(eval(test_input))
		# Act
		retrieved = linkedList.pop()
		# Assert
		assert retrieved == expected

	@pytest.mark.parametrize("test_input,expected", [("one", True),
	                                                 ("two", True)])
	def test_empty(self, test_input, expected):
		# Arrange
		linkedList = LinkedList()
		linkedList.push(test_input)
		# Act
		linkedList.pop()
		# Assert
		assert linkedList.is_empty() == expected
		
	def test_test(self):
		assert 1 == 1
