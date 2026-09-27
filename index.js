// // araray 
// let marks = [100,50,70,80,90]
// console.log(marks)
// console.log(marks.length)

// let arr =  [100, 20, "Rohit ", true] // in js array we can store diffrent  type of data like boolen , int , string
 
// // console.log(arr[3])
// // console.log( typeof arr)

// // arr[1] = 90;
// // console.log(arr);

// //push

// arr.push(90)
// arr.push("saturday")
// console.log(arr)

// //pop
// arr.pop()
// console.log(arr)

// //  to add at the starting of the array

// arr.unshift(10)
// console.log(arr)

// // to  delete first element 
// arr.shift()
// console.log(arr) 

// let arr = [10,20,30,40,50]
// // for(let i = 0;i<arr.length;i++){
// //     console.log(arr[i])
// // }
// for(let num of arr){
//     console.log(num)
// }

// let arr = [10,30,50,90,11]
// let  arr2 =arr;
// arr2.push(30)
// console.log(arr);

// silicing array

    // const arr = [10,30,50,90,11]
    // const  arr2 = arr.slice(2,4) // onginal  array  me koi changes nhi hoga
    // console.log(arr2);

    // console.log(arr.splice(1,3)) //original  array se split  hoga
    //   console.log(arr);

    
    
    //merge array
    
    // const arr = [10,30,50,90,11]
    // const arr2 = ["Rohit" ,  11, true]
    // const arr4 = [90,4,false]
    //arr.push(arr2)
    // const arr3 = arr.concat(arr2,arr4)
    // const arr3  = [arr,arr2,arr4]
    // const arr3 = [...arr,...arr2,...arr4]
     
    // console.log(arr3)


    // convert array into  string
    
    //  const names = ["Aman", "ujjawaal","praphull","kaushall", "Bittu"]
    // console.log(names.toString())
    // console.log(names.join("-"))

    // console.log(names.lastIndexOf("ujjawaal"))
    //  console.log(names.includes("ujjawaal"))


    // const names = ["Aman", "ujjawaal","praphull","kaushall", "Bittu"]

    // //  names.sort();
    //  names.reverse()
    //  console.log(names)

    // const a = [101,90,80,32,91]; // short on basic of ascii value
    // a.sort()
    // console.log(a)

    // const arr = [10,20,40,31 ,3,11]
    // arr.sort((a,b)=>a-b);
    // console.log (arr)
     
    //flattering nested array

    const arr = [10,30,50,[40,90,11],80]
    const a = arr.flat(2)
    console.log(a)

    // console.log(arr[3][2][1])

    