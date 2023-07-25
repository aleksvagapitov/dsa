namespace DSA {

    public class ListNode<T> {
        public ListNode<T>? Next { get; set; }
        public T Value { get; set; }

        public ListNode(T value)
        {
            this.Next = null;
            this.Value = value;
        }

        public ListNode(ListNode<T> next, T value)
        {
            this.Next = next;
            this.Value = value;
        }
    }
    public class LinkedList<T> {
        public ListNode<T>? Head { get; set; } 
        public int Length { get; set; }

        public LinkedList()
        {
            this.Head = null;
            this.Length = 0;
        }

        public LinkedList(ListNode<T> node) {
            this.Head = node;
            this.Length = 1;
        }
        
        public void Add(T value) {
            var newNode = new ListNode<T>(value);
            if (this.Head == null)
            {
                this.Head = newNode;
                this.Length = 1;
                return;
            }
            var currNode = this.Head;
            while (currNode.Next != null) {
               currNode = currNode.Next;  
            }
            currNode.Next = newNode;
            this.Length += 1;
        }
    }

}
