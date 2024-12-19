class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (this.head === null) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
      this.print();
    }
  
    print() {
      let current = this.head;
      let result = "";
      while (current !== null) {
        result += current.value + " ";
        current = current.next;
      }
      console.log("Linked List:", result);
    }
  }
  // Example usage
  const myLinkedList = new LinkedList();
  myLinkedList.append(10);
  myLinkedList.append(20);
  myLinkedList.append(30);