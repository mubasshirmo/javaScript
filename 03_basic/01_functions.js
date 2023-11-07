//fuction is simply like package in which we write code and take it anywhere and use it

function sayMyName(){
    console.log("cris")
    console.log("ronaldo");
}

//calling fuction
//  sayMyName()

//num1,num2 are parameters
function addnumbers(num1,num2){
    // console.log(num1+num2)
}

//2,3 are the argunment
const sum=addnumbers(2,3)
// console.log("sum is",sum);



//returning the rsult and then storing
function addnumber(num1,num2){
    let result=num1+num2
    return result 
}
const result=addnumber(3,3)
// console.log("the result of sum is",result);


//example of taking parameters
//the default values here is sam
function loginusername(username="sam"){
    if(username===undefined){
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginusername())


//******************************** */
//rest operator
function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,5000))


const user={
    username:"usaid",
    prices:400
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
//1st way
// handleObject(user);

//2nd way
// handleObject({username:"abdul",price:555})

//********************************* */

const myNewArray=[200,399,5999,6999]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))