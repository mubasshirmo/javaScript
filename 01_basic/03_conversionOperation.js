let score="33abc"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber)


// 33-->33
// "33abc"--> NaN
// true-->1 


let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
// 1--> true; 
// "ankd"--> true

let num=11
let StringIs=String(num)
console.log(StringIs)
console.log(typeof StringIs)


//*************Operation****************

let value=3
let negValue = -value
console.log(negValue)
 
let str="hello"
let str1="yoo"
let se=str+str1
console.log(se)

console.log("1"+1)
console.log(1+"1");
console.log("1"+2+2);
console.log(2+2+"1   ");

let num1, num2, num3
num1= num2 =num3=2+2

console.log([num1,num2,num3])

let gameCounter=100
gameCounter++
console.log(gameCounter)

console.log(null >0);
console.log(null ==0);
console.log(null>=0);

console.log(undefined ==0);
console.log(undefined >0);
console.log(undefined<0);


//==== yeh without conversion k comparison krega
console.log("2" ===2);