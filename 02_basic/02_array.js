const crick=["kohli","rohit","rahul"]
const footb=["cris","leo","hendo"]

//this will add an array into existing array 
// crick.push(footb)
// console.log(crick)


//this concat will add all element into new array of both
// const all= crick.concat(footb)
// console.log(all);


//spread operator will also done this work to combine
// const allSports=[...crick,...footb]
// console.log(allSports);

//multiple array loop
const another_arr=[1,2,3,[4,5,[6,7,7,8]]]

const real_another_array=another_arr.flat(Infinity);
console.log(real_another_array);


//to convert into array
console.log(Array.isArray("Hitesh")); //its check
console.log(Array.from("Histeh"));
console.log(Array.from({name:"hitesh"}))//intresting and it get confused


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))