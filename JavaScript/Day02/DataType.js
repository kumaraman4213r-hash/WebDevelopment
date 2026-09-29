// dataType
//  * primitive data type :-
      // number ,string ,boolean , undrfined , null ,bigint, symbol

      // number
      let a = 10
      let b = 2.36
      console.log(a+b)

      // string  
      let c = "this is string\n"
      let d = "this is java script"
      console.log(c,d)

      //boolean 
      let login = true
      let f = false
      console.log(login,f)

      //undefined

      let user
      console.log(user)

      //bigint
      let num = 36774646766376474n
      console.log(num)

      // null
      let weather  = null
      console.log(weather)

      //symbol
      const id1 = Symbol("id")
      console.log(id1)
       console.log(typeof id1)


     let str = "Aman"
         str = "kuamr"
         console.log(str[0])  //  this is not example of  immutable


         let xyz  = "msdhoni"
          xyz[0] = "v"
          console.log(xyz)  // primitive data type aree immutable 

// pass by value
let x = 10
let y = x
y = 20
console.log(x,y)  //not mutable


//  * Non primitive DataType
       // Arrays, object ,function       

       //array

       let arr = [10,29,11,36,"Aman",true]
       console.log(arr)

       //object

       let person = {
        name: "Aman",
        age: 20,
        category:'gen'
        }

        // function
         let s = function add(){
            console.log("hello");
        }
        console.log(s)

        //non primitive data type are mutable
        let arr1 = [10,20,30,40]
        arr1.push(90)
        arr1[0] = 100 //mutate
        console.log(arr1)


        let  obj ={
            name: "Aman",
            age: 20

        }
        obj.name = "kumar"
        console.log(obj)
        
        
       

        
       

