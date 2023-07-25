package main

type Node struct {
    value int
    next *Node
}

type List struct {
    head *Node
    tail *Node
    length int
}

func (l *List) Push(value int){
    node := &Node {value: value}

    if l.head == nil {
        l.head = node
    } else {
       l.tail.next = node 
    }

    l.tail = node
}
