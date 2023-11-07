const score=400
console.log(score);

const balance =new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

//approx method precision
const otherNumber=123.8966
console.log(otherNumber.toPrecision(4))


const hundreds=1000000000
console.log(hundreds.toLocaleString('en-IN'))

//++++++++++++++++++Maths++++++++++++
 console.log(Math)
 console.log(Math.abs(-33))
 console.log(Math.round(4.5))
 console.log(Math.ceil(4.3))  //top se round off krega
 console.log(Math.floor(4.9))  //bottom se round off krega
 console.log(Math.min(4,3,5,2))
 console.log(Math.max(2,3,5,5))


 //random function yeh 0 or 1 k beech ki values deta hai

 console.log(Math.random());
 console.log((Math.random()*10)+1)
 //agar hume 1 se lekar 10 tk chaheye
 console.log(Math.floor(Math.random()*10)+1)
 

 const min=10
 const max=20

 console.log(Math.floor(Math.random() *(max-min+1)+min))