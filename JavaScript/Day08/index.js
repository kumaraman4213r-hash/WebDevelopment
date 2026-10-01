// function in javascript : In JavaScript, a function is a reusable block of code designed to perform a specific task.



// function greeting(){
//     console.log("Happy Happy Happy")
//     return 1
// }
// greeting()

// function addNumber(num1,num2,num3=0,num4=0){
//     const sum = num1+num2+num3+num4
//     console.log(sum)
// }



 //rest operator
 
//  function addNumber(...num){
//     console.log(num)
//     let sum = 0;
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum);

//  }
// addNumber(3,4);
// addNumber(4,10,12) ; //function is usedful forcode reuubality
// addNumber(12,23,45,67)

// // console.log(greeting())

// const arr = [10,20,30,40,50]
// const arr2 = [30,70,90,10]


// // const[first,second ,...num] = arr;
// // console.log(first,second,num)
// const ans = [...arr,...arr2]
// console.log(ans)

// function :Expression



// const addNumber = function(num1, num2){
// return num1+num2
// }
// console.log(addNumber(4,4))

//arrow function

// const addNumber = (num1,num2)=>{
//    return num1+num2;
// }
// console.log(addNumber(4,5))


// thhis  is fuction
const addNumber = (num1,num2) => num1+num2
console.log(addNumber(3,4))
const sqNumber = (num) => num*num
console.log(sqNumber(6))

const greeting = ()=>{
    let user ={
        name:"Aman",
        age:21
    }
    return user
}
console.log(greeting())

// another 
  const gret = ()=> ({name:"xyz",age:30})  ;
  console.log(gret());

  //IIFE : Immediately Invoked Function Expression
  (function Invoked (){
    console.log("hello heyy")
  })();


  // callback function :  a function that you pass as an argument into another function, to be executed (called back) later inside that function.


  function  greet(){
    console.log("Fine")
  }
  function meet(callback){
    console.log("how are you")
    callback()
  }
  meet(greet)