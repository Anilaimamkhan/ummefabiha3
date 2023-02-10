console.log("hello");
let bars = document.getElementById("bars");
let nav = document.getElementsByTagName("nav");




bars.addEventListener("click", () => {
    nav.classList.toggle("active");


} )



// bars.addEventListener("click", () => {
// // alert("me");
// bars.classList.toggle("fa-times");
// nav.classList.toggle("active");
// });