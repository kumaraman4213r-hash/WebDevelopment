// Scope and Closure
//Scope types: Global;-> accesible to  everyone
//  functional :-> Accesible only to that function
// Block level scope:-> Accesible only to that function

let a = 10;
const b = 20;

if (true) {
  console.log(b);
}
function greet() {
  console.log(a);
}
greet();


let global = 30;
function glob() {
  let global = 40;
  function meet() {
    let global = 10;
    console.log(global);
  }
  meet();
}
glob();

function createCounter(){
    let count = 0;
    function increment(){
        // console.log("I am increment function")
        count++
        return count;
    }
     return increment
}

 const counter = createCounter()
 console.log(counter())

 let  balance = 1000

//balance+="Aman";
//  balance-=500
//  console.log(balance)

// balance: like directly access na 

function createBankAccount() {
    let balance = 500;

    return {
        deposit: function(amount) {
            if (typeof amount === "number" && amount > 0) {
                balance += amount;
                return balance;
            }
        },
        withdraw: function(amount) {
            if (typeof amount === "number" && amount > 0 && amount <= balance) {
                balance -= amount;
                return balance;
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

// Example usage shown in terminal:
const account = createBankAccount();
console.log(account.deposit(200));   // 700
console.log(account.withdraw(100));  // 600
console.log(account.getBalance());   // 600


// Higher order function

function double(value){

    return function execute(num){
        return num*value;
    }
}

// Execution / Example:
const res = double(20);
console.log(res(5)); // Terminal output: 100