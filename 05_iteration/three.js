// for  loop for iterating array

// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for(const i of arr){
    // console.log(i);
}

const greeting="Heloow world"
for(const greet of greeting){
    // console.log(`Each char is ${greet}`)
}

//Maps-->uniques,and follow order

const map=new Map()
map.set('IN',"India")
map.set('us',"United state of America")
map.set('fr',"france")

//  console.log(map)

//  Using for loop
for(const key of map){
    //  console.log(key)
}

// 2nd type
for(const [key,value] of map){
    // console.log(key,':-',value)
}

//map is iteratable using loop but object are not iteratable
 