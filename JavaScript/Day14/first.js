// function handleClick(){
//     const element = document.getElementById("first")
//     element.textContent = "Good Morning"
// }

const element = document.getElementById("first")
// element.onclick = function handleClick(){
//      element.textContent = "Good Morning !"
// }
// //override
// element.onclick = function handleClick(){
//     element.textContent = "Good Evening !"

// }

// element.addEventListener('mouseenter', () => { 
//   element.textContent = " Good Morning !"; 
// });

// element.addEventListener('mouseleave', () => { 
//   element.style.backgroundColor="green" 
// });


// const child1 = document.getElementById("child1");
// child1.addEventListener('click',()=>{
//     child1.textContent = "I am clicked";
// })

// const parent  = document.getElementById("parent")
// console.log(parent.children)
// for(let child of parent.children){
//     console.log(child)
//     child.addEventListener('click',()=>{
//         child.textContent = "CLICKED"
//     })
// }

const parent = document.getElementById("parent");
// console.log(parent.children);

function handleClick(e){
   e.target.textContent = "I am Clicked";
   parent.removeEventListener('click',handleClick);
}

parent.addEventListener('click',handleClick)











// const grandparent = document.getElementById("grandparent");
// grandparent.addEventListener('click',(e)=>{
//      console.log(e.target);
//      console.log("GrandParent is clicked");
// })

// const parent = document.getElementById("parent");
// parent.addEventListener('click',(e)=>{
//     console.log(e);
//     console.log("Parent is clicked");
// })

// const child = document.getElementById("child");
// child.addEventListener('click',(e)=>{
//     console.log(e);
//      e.stopPropagation();
//      console.log("child is clicked")
//     })