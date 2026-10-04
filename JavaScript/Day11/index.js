// // forEach ,filter ,reducer, map , set

// const arr = [1, 2, 3, 4, 5]
// let  sum = 0
// arr.forEach((number)=>{
   // console.log(number,index,arr)
//     sum+=number
// })
// console.log(sum)

// filter 
// const arr = [10,20,30,5,90,87];
// true: select, false: not selected
// const newArr = arr.filter((number)=> number>25);

// console.log(newArr);
// this = [10,20,30,5,90,87];

// const compare = (number)=> number>25;
// compare(20);

// Array.prototype.filtering = function(compare){
    
//     const ans = [];
//     for(let num of this){
//        if(compare(num)){
//         ans.push(num);
//        }
//     }

//     return ans;
// }

// const newArr = arr.filtering((num)=>num>25);

// console.log(newArr);

// const a = [80,30,15,31,42,70]
// const answer = a.filtering((num)=>num>25);
// console.log(answer);


// const arr = [10,20,30,5,90,87];


// const newArr = arr.map((num)=> num*3);
// console.log(newArr);


const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

// const newProduct = products.filter((product)=> product.price>50).sort((a,b)=>b.price-a.price).map((product)=> ({name:product.name, price:product.price}));
// console.log(newProduct);

// const ans = products.map((product)=> ({name:product.name, price:product.price}))
//  console.log(ans);

// reduce
// accumulator = sum =0, 
// accumulator = 1400
// [{item:"Bhindi",price:200},{item:'sonpapdi,price:40},{}]

//  const totalPrice = products.reduce((accumulator,currenValue)=>{

//     if(currenValue.inStock)
//     return accumulator+currenValue.price;
//     else
//     return accumulator

//  },0)

//  console.log(totalPrice)

// Data structure: set

// const arr = [10,20,30,10,25,15,10,20];
// console.log(arr);

// const s1 = new Set(arr);
// s1.add(11);


//console.log(s1.has(23));
// s1.delete(10);
// s1.clear();
// console.log(s1);

//  const email = ["ro@gm","ra@gm","mo@gm","ro@gm"];

//  const uniqueEmail = [...new Set(email)];
//   console.log(uniqueEmail);

// const s1 = new Set(email);

// for(let num of s1){
//     console.log(num);
// }


// map;
const m1 = new Map([
    ["Aman", 40],
    [2, "Chunnu"],
    [true, 11],
    [[10,30,11], "Ujjawal"]
]);


m1.set({name:"Harsh",age:20}, false);

// console.log(m1.size);

for(let [keys,value] of m1){
    console.log(keys, value);

}