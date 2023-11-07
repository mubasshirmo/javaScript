// using the map
const myNubers=[1,2,3,4,5,6,7,8,9,10]

const newNums=myNubers.map((num)=> num+10)

// console.log(newNums);


//using for each loop

const newN=[]
myNubers.forEach(ele => {
   newN.push(ele+10);
    
});
// console.log(newN);

//chaning 

const newNumss=myNubers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
console.log(newNumss);