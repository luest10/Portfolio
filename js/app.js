// ================= SCROLL SUAVE =================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({
behavior: "smooth"
});

});

});


// ================= ANIMACION SCROLL =================

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0)";

}

});

});

sections.forEach(section => {

section.style.opacity = "0";
section.style.transform = "translateY(40px)";
section.style.transition = "0.6s";

observer.observe(section);

});


// ================= NAVBAR SCROLL =================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

if(window.scrollY > 50){

navbar.style.borderBottom = "1px solid rgba(0,0,0,0.1)";

}else{

navbar.style.borderBottom = "none";

}

});


const aboutSection = document.getElementById('about');

window.addEventListener('scroll', () => {
  const top = aboutSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (top < windowHeight / 1.2) {
    aboutSection.style.background = '#000';
    aboutSection.style.color = '#fff';
  } else {
    aboutSection.style.background = '#ffffff';
    aboutSection.style.color = '#000';
  }
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links a");

// abrir y cerrar menú
toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
});

// cerrar menú cuando se hace click en un link
links.forEach(link => {
    link.addEventListener("click", () => {
        toggle.classList.remove("active");
        nav.classList.remove("active");
    });
});