function greet(name){
    return console.log('Hello ' + name);
    
}
greet('Dustin')

function addNumbers(num1, num2){
    return console.log(num1 + num2);
}
addNumbers(5, 9)

let x = 10;

function changeValue(){
let x = 3
return console.log(x + 4)
}

changeValue()

function outerFunction(){
    let count = 0; 
    return {
increment(){
    count++;
    return count;
},
decrement(){
count--;
return count;
},
    };  
}
let update = outerFunction();
console.log(update.increment());