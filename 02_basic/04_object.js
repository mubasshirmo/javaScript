//const tinerUser=new Object()


const tinderuser={}
tinderuser.id="123axa"
tinderuser.name="cris"
tinderuser.isLoggedIn=false


//console.log(tinderuser)

const regularUser ={
    email:"cris@gmail.com",
    fullName:{
        username:{
            firstname:"cristino",
            lastname:"ronaldo"

        }
    }
}

//console.log(regularUser.fullName.username)
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//comibned into one object

const obj3=Object.assign({},obj1,obj2)
// console.log(obj3)

//spread method of combinbig
const obj4={...obj1,...obj2}
// console.log(obj4)

//IF the vlues are coming from the databases in the form of array pf objects
const users=[
      {
        id:1,
        mail:"a!@gamo;.com"
    },
    {
        id:2,
        mail:"b!@gamo;.com"
    },
    {
        id:3,
        mail:"c!@gamo;.com"
    }
]
users[2].mail;

// console.log(tinderuser)

// //to get the keys and vlaues of the obejct
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));

//key or values ko array ke format m kr diya jata hai
// console.log(Object.entries(tinderuser))


//if we are getting the values from the Object then we can also check the property is available or not
// console.log(tinderuser.hasOwnProperty('name'))


const cource={
    coursename:"javascript",
    price:"999",
    courseInstructor:"leo"

}

//this reduce is Destructuring

//its hard to write the full name everytime so we reduces it
//console.log(cource.courseInstructor)
//1
// const {courseInstructor}=cource
// console.log(courseInstructor)
//2
const {courseInstructor:Instruc}=cource
console.log(Instruc);
