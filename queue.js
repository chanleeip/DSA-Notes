class Queue{
    constructor(){
        this.queue=[];
    }
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        this.queue.shift();
    }
    printqueue(){
        for (let i of this.queue){
            console.log(i);
        }
    }
}
var queue=new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
// queue.printqueue();
queue.dequeue();
queue.dequeue();
queue.printqueue();