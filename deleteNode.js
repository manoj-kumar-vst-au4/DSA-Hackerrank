class Node {
    constructor(val){
        this.val= val;
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
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.length++;
        return true;
    }
}

let list = new List();

function deleteNode(head, position) {
    if(position < 0) return null;
    if(position === 0) return head = head.next; 
    if(!head){
        return head;
    }else{
        let counter = 0;
        let current = head;
        while(counter !== (position - 1)){
            counter++;
            current = current.next;
        }
    
        let previous = current;
        let deleted = previous.next;
        previous.next = deleted.next;
    }
    return head;

}

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);

console.log(deleteNode(list.head, 5))
 console.log(list)