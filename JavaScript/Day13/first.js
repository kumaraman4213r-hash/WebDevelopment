const newElement = document.createElement("h2"); 
newElement.textContent = "Good Evening"; 
newElement.id = "second"; 

const element  = document.getElementById("first");
element.after(newElement);

const newElement2  = document.createElement('h3');
newElement2.textContent = "dussehra is Comming";
newElement2.id = "third";
// newElement2.className = "dussehra";

newElement2.classList.add( "dussehra" )
newElement2.classList.add( "Diwali" )
// newElement2.classList.remove( "dussehra" )

newElement2.style.backgroundColor = "brown";
newElement2.style.fontSize = "30px";

newElement2.setAttribute("Bad","good");


element.before(newElement2);
console.log(newElement2.getAttribute("Bad"));

//

// const list = document.createElement("li");
// list.textContent = "Curd"

// const list2 = document.createElement("li");
// list2.textContent = "yogart"

// const list3 = document.createElement("li");
// list3.textContent = "IceCream"

// const list4 = document.createElement("li");
// list4.textContent = "Paneer"


// const unorderElement = document.getElementById("listing");
// unorderElement.append(list,list2)

// unorderElement.prepend(list3)
// unorderElement.children[1].after(list4);
// // list.after(list4)


const arr = ["curd", "yogart", "IceCream","Paneer","Tea"];

const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();
// array

for(let food of arr){
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}
unorderElement.append(fragment)

// const s1 = document.getElementById("first");
// s1.remove();

const month = document.getElementById("ten");

// console.log(month.children);