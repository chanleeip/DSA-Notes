class Stack{
    constructor(){
        this.stack=[];
    }
    push(item){
        this.stack.push(item);
    }
    pop(){
        if(this.stack.length===0){
            return(console.log("ERROR"))
        }
        this.stack.pop();
    }
    peek(){
        this.stack[this.stack.length-1];
    }
    printStack(){
        for(let i=this.stack.length-1;i>=0;i--){
            console.log(this.stack[i]);
        }

    }
}

let stack=new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.printStack();
stack.pop()
stack.printStack();