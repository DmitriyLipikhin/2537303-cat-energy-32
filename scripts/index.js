var n=document.querySelector(".main-nav"),a=document.querySelector(".main-nav__togle");n.classList.remove("main-nav--nojs");a.addEventListener("click",function(){n.classList.contains("main-nav--closed")?(n.classList.remove("main-nav--closed"),n.classList.add("main-nav--opened")):(n.classList.add("main-nav--closed"),n.classList.remove("main-nav--opened"))});
