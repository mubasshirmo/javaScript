// for

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element==5){
        // console.log("5 is best number")
    }
    // console.log(element);
}


//break and continue 
// for (let i = 0; i < 20; i++) {
//      if(i==5){
//         console.log(`Detected 5`);
//         break
//      }
//      console.log(`vlaue of i is ${i}`);
// }

for (let i = 0; i < 20; i++) {
     if(i==5){
        console.log(`Detected 5`);
        continue
     }
     console.log(`vlaue of i is ${i}`);
}