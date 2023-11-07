//This is refer to current context
const user={
    username:"salah",
    price:999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
      //  console.log(this)  //this will print alll the object that are present
    }
}

// user.welcomeMessage()
// //If we give the value of username from here so the vlaue will be override and the current context will be changed
// user.username="hendo"
// user.welcomeMessage()

// console.log(this)  
// Yhan pr current context hai empty kyuki hum nod environment m hai
// or jb hum ise browser m run krte hai to iska current context hota hai window
//  Pahle jb hum javascript ko run krte the to vo keval brwoser m paya jata tha ab hum usse alag nikal kr run krten hai to kissi ne uska naam node,deeno rakha 
//  to browser k andar jb run krta hai to global object jo hai ti window hai is liye hum browser hm uske saare event capture kr paate hai like click


function chai(){
    let username="salah"
    console.log(this)
    //console.log(this.username)
}

// chai(); 

//jb hum function k andar this ko print krte hai to kafi saari values aati hai 
//  this object ke andar kaam karta hai function k andar kaam nhi krta hai

// **********************************************\
//Arrow function
//Basic
const addTwo=(num1,num2)=>{
    return num1+num2;
}
//  console.log(addTwo(3,4))

//curry braces m kihen ge to return keyword likhna parega
// Implicit return
const addTwoo = (num1,num2)=>  num1+num2;
// const addTwoo = (num1,num2)=>  (num1+num2);

// Agar hume object return krna hai to hume ise krenge
const addthree=(num1,num2) =>({username:"leo"})