// let scrollEventHandler = function()
// {
//   window.scroll(0, window.pageYOffset)
// }

// window.addEventListener("scroll", scrollEventHandler, false);



const nav = document.querySelector(".navbar");
const slider = document.querySelector(".sliding");
const navsearch = document.querySelector(".navsearch");
const navinput = document.querySelector(".navinput");

window.addEventListener("scroll", ()=>{if(window.pageYOffset==0){
nav.style.backgroundColor="transparent";
slider.style.backgroundColor="transparent";
nav.style.transition="0.2s ease-in";
navinput.style.display="none";
}

else{
  nav.style.backgroundColor="white";
  slider.style.backgroundColor="white";
  nav.style.transition="0.2s ease-in";
  navinput.style.display="inline-block";
}})
document.addEventListener('scroll', ()=>{
  if(window.scrollY>=350){
    navsearch.classList.add("scrollednavinput");
    slider.classList.add("scrollednav");

  }
  else{
    navsearch.classList.remove("scrollednavinput");
    slider.classList.remove("scrollednav");
  }
  }
  )

// window.addEventListener("touchmove", ()=>{if(window.pageYOffset==0){
//   nav.style.backgroundColor="transparent";
//   nav.style.transition="0.2s ease-in"
//   }
  
//   else{
//     nav.style.backgroundColor="white";
//     nav.style.transition="0.2s ease-in"
//   }})
 
  // --------------------------
const primarybtn = document.querySelector(".primary");
const secondarybtn = document.querySelector(".secondary");
const indicator = document.querySelector(".indicator");
const placeholderinput= document.querySelector("#locationinput");
const placeholdernavinput = document.querySelector(".navinput")
primarybtn.addEventListener("click", ()=>{
  indicator.classList.remove("moveindicator");
  placeholderinput.placeholder= "Enter Delivery Address";
  placeholdernavinput.placeholder= "Enter Delivery Address";
});
secondarybtn.addEventListener("click",()=>{
  indicator.classList.add("moveindicator");
  placeholderinput.placeholder= "Enter Your Address";
  placeholdernavinput.placeholder= "Enter Your Address";
});

const ham = document.querySelector("#hamburger");
const dark = document.querySelector(".darkpage")
const hamburgermenu = document.querySelector(".hamburgermenu")
const body = document.querySelector("body");
ham.addEventListener('click', ()=>{
  hamburgermenu.classList.toggle("active1");
  dark.classList.toggle("active2");
  body.style.position = "fixed";
})
dark.addEventListener('click',()=>{
  hamburgermenu.classList.toggle("active1");
  dark.classList.toggle("active2");
  body.style.position = "static";
})


// const window = document.querySelector("window");



