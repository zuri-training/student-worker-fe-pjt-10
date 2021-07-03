// const navSlide = ()=>{
// const burger = document.querySelector('.burger');
// const nav = document.querySelector('.nav-links');
// const navLinks = document.querySelectorAll('.nav-links li')
// burger.addEventListener('click',() =>{
// nav.classList.toggle('active')
// navLinks.forEach((link,index) =>{
// if(link.style.animation){
//   link.style.animation = ''
// }else{
//   link.style.animation = `navlinkfade 0.5s ease forwards ${index / 7 + 1.5}s`
// }
// })

// burger.classList.toggle('toggle');
// })


// }

// navSlide();
 var sidee = document.querySelector(".sidebar")

function closeSidebar() {
	sidee.style.display = "none";
}

function openSidebar(){
	sidee.style.display = "block";
}

const selectItem = el =>{
	return document.querySelector(el)
}

const body = selectItem('body')
const menu = selectItem('.menu')

menu.addEventListener('click', func)

function func() {
	body.classList.toggle('open')
}