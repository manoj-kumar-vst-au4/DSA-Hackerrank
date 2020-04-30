class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class List {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this.head;
    }
}

let list = new List();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
function insertNodeAtPosition(head, data, position) {
    let newNode = new Node(data);
    if(position === 0){
        let current = head;
        head = newNode;
        head.next = current;
        
    }else{
        let counter = 0;
    let current = head;
    while(counter !== (position - 1)){
        counter++;
        current = current.next
    }
    let prev = current;
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    }
    
    return head;
}

console.log(insertNodeAtPosition(list.head, 10, 0));
console.log(list)