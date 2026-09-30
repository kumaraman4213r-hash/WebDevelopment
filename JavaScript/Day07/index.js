// //object
// //key value
// const user = {
//     name : "Aman",
//     age : 20,
//     emailId : "kuamr@gmail.com",
//     amount : 2340
// }

//const { use } = require("react")

// console.log(user);

// console.log(user.age);
// // update
// user.aadhar  = 1234;
// user.amount = 5000;
// console.log(user)

// //delete
// delete user.emailId;
// console.log(user )

// const user = {
//     name : "Aman",
//     age : 20,
//     emailId : "kuamr@gmail.com",
//     amount : 2340
// }
// const user2 = user
// user2.age = 90
// console.log(user)

//console.log(Object.keys(user))

//console.log(Object.values(user))
//console.log(Object.entries(user))

// for(let   keys in user){
//     console.log(keys, user[keys])
// }

// const user = {
//     name : "Aman",
//     age : 20,
//     emailId : "kuamr@gmail.com",
//     amount : 2340
// }

// const temnparr = Object.keys(user);
// console.log(temnparr)
// for(let keys of temnparr){
//     console.log(keys)
// }

// for(let keys of Object.values(user)){
//     console.log(keys)
// }


// for(let keys of Object.entries(user)){
//      console.log(keys)
// }


    // const name  =  user.name;
    // const age = user .age;
    // object ko destructure  krna
    //const { name,age} = user; //better approach

    //const arr = [10,20,40,90,11]
    //const [first,second] = arr 
    //console.log(name,age)
    //console.log(first,second)




//     const user = {
//     name : "Aman",
//     age : 20,
//     emailId : "kuamr@gmail.com",
//     amount : 2340,
//     greeting : function(){
//         console.log(`Happy Happy ${this.name}`)//this keywoed store the refference
//         return 20
//     }
// }
//   const va = user.greeting()
//   console.log(va)

// nested  object = object ke ander object 

// const user = {
//     name : "Aman",
//     age : 20,
//     emailId : "kuamr@gmail.com",
//     amount : 2340,
//     address:{
//         city: "Ara",
//         state : "Bihar"
//     }
// }

// const user2 = {...user}
// // user2.name = "Mohan"
// user2.address.city = "Patna"
// console.log(user)

// console.log(user.address.city);

//..... keys values  String or symbol......


const sym = Symbol("id")
const user = {
    name:"Ujjawal",
    age:20,
    0:100,
    2:"Aman",
    [sym] : "hello ji"
}
console.log(user[sym]);