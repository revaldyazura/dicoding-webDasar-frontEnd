// const button = document.getElementById("btn");
// const list = document.getElementById("list");

// list.style.display = "none";

// button.addEventListener("click", (event) => {
//     if (list.style.display == "none") {
//         list.style.display = "block";
//     } else {
//         list.style.display = "none";
//     }
// })

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    content.classList.toggle("active");  
})

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))