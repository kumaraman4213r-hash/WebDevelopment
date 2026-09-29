//Operator

//Aritmetic
console.log(2+5);
console.log(2-5);
console.log(2*5)
console.log(6/2)
console.log(5%2) // remainder

console.log(5**2)

//Assignment Operators

let x = 20
let y = 10
//x = x+y same as  x+=y
// x = x-y
// x = x*y
x*=y
console.log(x)

//Comparsion Opertor

let a=10,
    b=20
console.log(a<b) 
console.log(a<=b)    
console.log(a>b) 
console.log(a==b)

//number to strig
let c = 10
let d = String(c)
console.log(d)
console.log(typeof d)

console.log(Number(true))

//computer science problem
let e = 0.1
let f = 0.2

 g = e + f
console.log(g)

//1. null is loosely equal to undefined only
 console.log(null==undefined)
 console.log(null===undefined) /// ===means comparing from diffrent data  types

 console.log(null==0)


 //loop

 //for loop
 // post increment i++
 // post  decrement i-- 

 for(let i = 0;i<10;i++){
    console.log(i); 

 }
 console.log("\n")  

// while loop

let j = 0;
while(j<10){
    console.log(j)
    j++
}

 console.log("\n")  

 // do while

 let k = 0
 do{
    console.log(k)
    k++
 }while(k<10)


   // if else condition

   let age = 15
   if(age>=18){
    console.log("eligible")
   }else{
    console.log("not eligible")
   }


  // else if

  let age1 = 20
   if(age1<=18){
    console.log("kid")
   }else if(age1>=60){
    console.log("old")

   }else{
    console.log("young")
   }

   // Logical Operator

// && , ||

// Logical AND (&&)
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

// Logical OR (||)
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

 



