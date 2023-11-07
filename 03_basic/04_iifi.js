//  Immediately Invoked Function Expression(IIFE)


//  JO function immedietly execute ho jaeye
// global scope k pollution se problem hoti hai to uske variables ko hatane ke liye liye hmne iifi ka use kiyahai

// Some time we have to add the ;collon explicitly 
// Otherwise it shows error 
(function chai(){
    //named iifi
    console.log(`DB connected`)
})();

// Arrow function working in iifi
(() => {
    console.log(`Db connected 2`)
})();

//parameter pass
((name) => {
    console.log(`Db connected 2 ${name}`)
})('thigo')



// ******************************************
//  JavaScript execution context
// {}--> global execution context
//  functional execution context
//  eval execution context

//   phases
// 1. Memory creation phase
// 2. execution phase

