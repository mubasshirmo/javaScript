// var c=30

//global scope can be accessed in fuction but function can't get outside

let a=100
if(true){
    let a=10
    const b=20
    // console.log("Inner ",a);
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username="salah"
    
    function two(){
        const website="youtube"
        // console.log(username);
    }
    // console.log(website)
    two()
}
one();

function addone(num){
    return num+1
}
console.log(addone(5));

// addTwo(2); it can't write here before initilisation because we have store in a varible here
const addTwo= function(num){
    return num+3
}
addTwo(2); 
