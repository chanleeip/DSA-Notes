class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null;
        this.length=0;
    }
    addElement(value){
        var node=new Node(value);
        if(this.head==null){
            this.head=node;
        }
        else{
            var current=this.head;
            while(current.next!=null){
                current=current.next;
            }
            current.next=b;
        }
        this.length++;
}
    addElementAtSpecificIndex(index,value){
        if(index <0 || this.length<index){
            return console.log("ERROR")
        }
        else{
            var node=new Node(value);
            var current,previous
            current = this.head;
            if(index===0){
                node.next=this.head;
                this.head=node;
            }
            else{
                current=this.head;
                for(let i=0;i<index;i++){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                previous.next=node;
            }
            this.length++;
        }
    }

    removeElementFromIndex(index){
        if(index<0 || this.length<index){
        return console.log("ERROR")
    }
    else{
            var current=this.head;
            if(index===0){
                this.head=current.next;
            }
            else{
                var previous,current
                for(let i=0;i<index;i++){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
            }
        }
    }
    findIndexOfElement(value){
        var count=0;
        var current=this.head;
        while(current.next){
            if(current.value===value){
            break;
        }
        current=current.next;
        count++;
        }
        return count;
    }

    printLinkedList(){
        var current=this.head;
        while(current.next){
            console.log(current.value);
            current=current.next;
        }
        console.log(current.value);
    }
}

var linkedlist=new LinkedList();
linkedlist.addElement(1);
linkedlist.addElement(2);
linkedlist.addElement(3);
linkedlist.addElement(4);
linkedlist.addElement(5);
linkedlist.removeElementFromIndex(3);
linkedlist.printLinkedList();
