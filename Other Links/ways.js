let o1 = document.querySelector("#Way1");
let o2 = document.querySelector("#Way2");
let o3 = document.querySelector("#Way3");
let o4 = document.querySelector("#Way4");
let o5 = document.querySelector("#Way5");
let o6 = document.querySelector("#Way6");
let o7 = document.querySelector("#Way7");
let img1 = document.querySelector("#fwImg");
let box1 = document.querySelector("#fBox");
let spans = document.querySelector("#firstWaySpan");
let redLine = document.querySelector(".redLine");
let cd1 = document.querySelector(".changingDiv1");
let cd2 = document.querySelector(".changingDiv2");
let cd3 = document.querySelector(".changingDiv3");
let cd4 = document.querySelector(".changingDiv4");
let cd5 = document.querySelector(".changingDiv5");
let cd6 = document.querySelector(".changingDiv6");
let cd7 = document.querySelector(".changingDiv7");

o1.addEventListener("click",()=>{
    o1.classList.add("active");
    o2.classList.remove("active");
    o3.classList.remove("active");
    o4.classList.remove("active");
    o5.classList.remove("active");
    o6.classList.remove("active");
    o7.classList.remove("active");
    cd1.classList.remove("hidden");
    cd2.classList.add("hidden");
    cd3.classList.add("hidden");
    cd4.classList.add("hidden");
    cd5.classList.add("hidden");
    cd6.classList.add("hidden");
    cd7.classList.add("hidden");

})

o2.addEventListener("click",()=>{
    o2.classList.add("active");
    o1.classList.remove("active");
    o3.classList.remove("active");
    o4.classList.remove("active");
    o5.classList.remove("active");
    o6.classList.remove("active");
    o7.classList.remove("active");
    cd2.classList.remove("hidden");
    cd1.classList.add("hidden");
    cd3.classList.add("hidden");
    cd4.classList.add("hidden");
    cd5.classList.add("hidden");
    cd6.classList.add("hidden");
    cd7.classList.add("hidden");
})

o3.addEventListener("click",()=>{
    o3.classList.add("active");
    o1.classList.remove("active");
    o2.classList.remove("active");
    o4.classList.remove("active");
    o5.classList.remove("active");
    o6.classList.remove("active");
    o7.classList.remove("active");
    cd3.classList.remove("hidden");
    cd1.classList.add("hidden");
    cd2.classList.add("hidden");
    cd4.classList.add("hidden");
    cd5.classList.add("hidden");
    cd6.classList.add("hidden");
    cd7.classList.add("hidden");
})

o4.addEventListener("click",()=>{
    o4.classList.add("active");
    o1.classList.remove("active");
    o2.classList.remove("active");
    o3.classList.remove("active");
    o5.classList.remove("active");
    o6.classList.remove("active");
    o7.classList.remove("active");
    cd4.classList.remove("hidden");
    cd1.classList.add("hidden");
    cd2.classList.add("hidden");
    cd3.classList.add("hidden");
    cd5.classList.add("hidden");
    cd6.classList.add("hidden");
    cd7.classList.add("hidden");
})

o5.addEventListener("click",()=>{
    o5.classList.add("active");
    o1.classList.remove("active");
    o2.classList.remove("active");
    o3.classList.remove("active");
    o4.classList.remove("active");
    o6.classList.remove("active");
    o7.classList.remove("active");
    cd5.classList.remove("hidden");
    cd1.classList.add("hidden");
    cd2.classList.add("hidden");
    cd3.classList.add("hidden");
    cd4.classList.add("hidden");
    cd6.classList.add("hidden");
    cd7.classList.add("hidden");
})

o6.addEventListener("click",()=>{
    o6.classList.add("active");
    o2.classList.remove("active");
    o1.classList.remove("active");
    o3.classList.remove("active");
    o4.classList.remove("active");
    o5.classList.remove("active");
    o7.classList.remove("active");
    cd6.classList.remove("hidden");
    cd1.classList.add("hidden");
    cd2.classList.add("hidden");
    cd3.classList.add("hidden");
    cd4.classList.add("hidden");
    cd5.classList.add("hidden");
    cd7.classList.add("hidden");
})

o7.addEventListener("click",()=>{
    o7.classList.add("active");
    o2.classList.remove("active");
    o1.classList.remove("active");
    o3.classList.remove("active");
    o4.classList.remove("active");
    o5.classList.remove("active");
    o6.classList.remove("active");
    cd7.classList.remove("hidden");
    cd1.classList.add("hidden");
    cd2.classList.add("hidden");
    cd3.classList.add("hidden");
    cd4.classList.add("hidden");
    cd5.classList.add("hidden");
    cd6.classList.add("hidden");
})
