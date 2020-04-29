class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

var list = new SinglyLinkedList()
list.push(1);
list.push(2);
list.push(3);
list.push(4);
// console.log(list);

function reverse(head) {
    let next;
    let node = head;
    let prev = null;

if(!head){
    return head;
}
    while(node !== null){
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
    }
    return prev;
    

}

console.log(reverse(list.head));