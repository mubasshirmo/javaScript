// truthy value--> maan lete hai ke yeh true hai
const userEmail="h@hitesh.ai"

if(userEmail){
    console.log("Got user eamail")
}else{
    console.log("Don't have user email")
}


// falsy value
// false,0,-0, BigInt 0n, "",null,undefined,NaN

//truthy values
// "0", 'false' ," ",[],{}, function(){}
 

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

// ***********************************

// Nullish Coaleescing Operator(??): null undefined
//error ki jagha value assig krni hogi
let val1; 
// val1 = 5 ??10
// val1= undefined??10 
val1= null ?? 10

// console.log(val1);

// **************************************

// Terinary Operator

// condition ? true:false

const iceTeaPrice=100
iceTeaPrice>=80 ? console.log("Price is greater than 80"):console.log("Price is more than 80")