//reduce 


const myNums=[1,2,3]

// const mytoal=myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`) 
//     return acc+currval
// },0)

// console.log(mytoal)

const mytotal=myNums.reduce((acc,curr)=>acc+curr,0)
console.log(mytotal)

const shopping=[
    {
        itemName:"js",
        price:3222
    },
    {
        itemName:"java",
        price:32222
    },
    {
        itemName:"python",
        price:82432
    },
    {
        itemName:"backend",
        price:9999
    },
    {
        itemName:"react js",
        price:87489
    },
    {
        itemName:"node",
        price:3444
    }
]
//alll alll the price of the object

const pricetopay=shopping.reduce((acc,item)=>acc+item.price,0)
console.log(pricetopay)