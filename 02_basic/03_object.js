//singleton--->constructor se banane pr banta hia
// literal se single ton nhi banta

//object literals

const mySym= Symbol("key1")

//all the parameter inside object treated as a string
//so that why we are accessing it through the ""

const JsUser={
    name:"abdul",
    [mySym]:"myKey1", 
    age:18,
    location:"delhi",
    email:"abdul@gmail.com"
}

console.log(JsUser.name);
console.log(JsUser["name"]);
console.log(JsUser["location"]);
console.log(JsUser[mySym]);


//to change email or override
JsUser.email="abdul@chatgpt.com"

//to freeze the values of the object
//Object.freeze(JsUser)

JsUser.email="abdul@bard.com"
console.log(JsUser);

//creating the function of an object 
JsUser.greeting= function(){
    console.log("Hellow Js User");
}
JsUser.greetingtwo= function(){
    console.log(`HElllow Js user,${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingtwo());