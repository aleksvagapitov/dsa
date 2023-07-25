package main

import "testing"

func TestAdding(t *testing.T){
    // Arrange
    cases := []int { 1, 2 }    
    linked_list := List { nil, nil, 0 }
    // Act
    
    linked_list.Push(cases[0]) 
    linked_list.Push(cases[1]) 

    // Assert
    if linked_list.head.value != cases[0] {
        t.Errorf("Expected: %d, Got:  %d", cases[0], linked_list.head.value)
    }
}
