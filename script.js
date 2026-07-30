const button= document.getElementById("enter-btn");
const logo= document.getElementById("logo");
button.addEventListener("click", function(e){
    e.preventDefault();
    logo.classList.add("activate");
});

const scan = document.querySelector(".scan-line");
button.addEventListener("click",function(e){
e.preventDefault();
logo.classList.add("activate");
scan.classList.add("scan");
});

const moon=document.querySelector(".moon");
setTimeout(()=>{
moon.classList.add("moon-active");
},700);