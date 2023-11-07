//for each loop

const coding=["js","ruby","java","python"]

// coding.forEach( function (item){
//     console.log(item);
    
// })

// using arrow function
// coding.forEach( (item)=>{
// console.log(item);
// })


// ************************************  

// function printMe(item){
//     console.log(item);
// }
//  coding.forEach(printMe)


// ************************************ 

coding.forEach( (item,index,arr)=>{
    //  console.log(item,index,arr);
})


const myCoding=[
  {
         language:"javascript",
         languagefilename:"js"
  },
  {
         language:"java",
         languagefilename:"java"
  },
  {
         language:"python",
         languagefilename:"py "
  }
]

// operation on array object

myCoding.forEach((item)=>{
    console.log(item.language)
})