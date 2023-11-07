// qubate sakra
//baitul mukadas
//masjide aqsA
const array=[1,2,3,4,5,6]
// console.log(array[0])

const player=["salah","hendo","thiago"]

const myarr=new Array(1,2,3,4,5)
// console.log(myarr[1])

// //add an element
// myarr.push(6)
// myarr.push(8)

// //removing the last element
// myarr.pop()

//adding in the starting
// myarr.unshift(9)
//removing from the front
// myarr.shift()
// console.log(myarr);
//
// console.log(myarr.includes(9))
// console.log(myarr.indexOf(3))

//converting array into the string
const newArr=myarr.join()

// console.log(myarr)
// console.log(newArr)


 //slice , splice

//  slice() Method:

// slice() is used to create a new array that contains a shallow copy of a portion of the original array.
// It takes one or two arguments. The first argument specifies the starting index, and the second argument (optional) 
// specifies the ending index (exclusive). If the second argument is omitted, slice() extracts up to the end of the array.



//  splice() Method:

//  splice() is used to change the contents of an array by removing, replacing, or adding elements.
//  It takes at least two arguments. The first argument is the starting index, and the second argument
//   is the number of elements to be removed from that index. You can also provide additional arguments to add elements at that position.
 

 console.log("A" ,myarr);

 const myn1=myarr.slice(0,3)

 console.log(myn1);
 console.log("B" ,myarr);

 const myn2=myarr.splice(1,3)
 console.log("C ",myn2 );
 console.log(myarr);


