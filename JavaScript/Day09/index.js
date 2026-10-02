//Hosting : JavaScript's default behavior of allocating memory for variable, function, and class declarations during the compilation phase(let ,Var ,Const)


// console.log(a)
// var a = 10
// var b = 20

// function addNumber(num1,num2){
//     var sum = num1+num2
//     return sum
// }
// var sumResult1 = addNumber(a,b)
// var sumResult2 = addNumber(3,4)
// console.log(sumResult1,sumResult2)


// // let const  
// let a = 10;
// let b = 20;
// console.log(a)


let a = 10
const b = 30

const addNumber= function(num1,num2){
    const sum = num1+num2;
    return sum;
}
const result = addNumber(a,b)
console.log(result)