// Primitive 


// 7 types: String, Number,boolean, null,undefined, symbol, BigInt

const scoreValue=100.3
const score=100

const usLoggedIn=false


//symbol
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId)


const bigNumber=85389320928429n


//Reference Type(Non primitive)

// Array,Object, functions

const heros=["mo","cris","leo"];

//Object
let myObj={
    name:"leo",
    age:22
}

//function stored in a variable
 const myfunction=function(){
    console.log("heyyy cris");
 }

 //type pata lagana



 //++++++++++++++++++++++++++++++++++++++++++
 //Stack(Primitive)  , Heap(Non-Primitive)

 let myname="cris@gmail.com"

 let anotherName=myname
 anotherName="ronsldo@gamil.com"

console.log(myname)
console.log(anotherName)

let userone={
    mail:"abdul@gmail.con",
    add:"delhi"
}
let usersec=userone
usersec.mail="abdulbasit@gmail.com"

console.log(userone.mail);
console.log(usersec.mail)