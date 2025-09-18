// const t = document.getElementById("title");
// console.log(t.innerText);

// const q = document.getElementsByClassName("sub");
// console.log(q[0].innerText);

// const e = document.getElementsByTagName("button");
// console.log(e[0].innerText); 

         //QUERYSELECTOR
// document.querySelector("#title");       
// const h = document.querySelector("#heading");
// h.innerHTML = "This is a new heading";

// document.querySelector("button").setAttribute("disabled", true);

// document.querySelector("h1").style.color = "blue";

// document.querySelector("h1").style.fontSize = "30px";

// document.querySelector("p").innerText = "Beth";


           //USING INLINE ONCLICK
//const heading = document.querySelector("h1")
//function example() {
    // alert("this function is called")
   // heading.innerText = "this is a new heading"
//};


           //USING ADDEVENTLISTENER
// const btn = document.querySelector("button")
// btn.addEventListener("click", function () {
//     // heading.innerText = "this is the one created by addEventListener"
//     console.log(input.value);
// });

//const input = document.querySelector("input");
//const btn = document.querySelector("button");
//btn.addEventListener("click", function() {
    // alert(input.value)
//}); 


const paragraph = document.querySelector("p");
// const btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     paragraph.innerText = "This is week 8";
//     paragraph.style.color = "pink";
// });

function swi () {
    paragraph.innerText = "This is week 8"
};

const newElement = document.createElement("p");
newElement.innerText = "This is a new paragraph";
document.body.appendChild(newElement);

const btn = document.querySelector("button");
const remove_btn = document.querySelector("#remove-btn");
btn.addEventListener("click", function () {
    const newElement = document.createElement("div");
    newElement.innerText = "product";
    document.body.appendChild(newElement);
});

remove_btn.addEventListener("click", function() {
    btn.remove();
});