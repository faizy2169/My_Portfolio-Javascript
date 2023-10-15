const loader = document.querySelector(".preloader");
const navbar = document.querySelector(".nav");
const navLinks =document.querySelectorAll(".header-link");
const modeBtn = document.querySelectorAll(".switch-btn");
const toggleBtn = document.querySelector(".toggle-btn");
const refBtn = document.querySelector(".ref-btn");
const sections = document.querySelectorAll("section");
const icons = document.querySelectorAll(".fa-moon"); 
const navHeight = navbar.getBoundingClientRect().height;
window.addEventListener("scroll", ()=>{
    const scrollHeight = window.pageYOffset;
    sections.forEach(section=>{
        let scrollTop = window.scrollY;
        let secOffSet = section.offsetTop - 150;
        let id = section.getAttribute("id");
        if(scrollTop >= secOffSet){
            navLinks.forEach(links=>{
                links.classList.remove("active");
                document.querySelector(`.nav-links a[href*=${id}]`).classList.add('active');

            })
        }
    })
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
        navLinks.forEach(links=>{
            links.classList.add("fixed-link")
        })
        modeBtn.forEach(btn=>{
            btn.classList.add("fixed-switch-btn");
        })
    }
    else{
        navbar.classList.remove("fixed-nav");
        navLinks.forEach(links=>{
            links.classList.remove("fixed-link")
            links.style.color = "";
            links.style.textShadow = "";
        })
        modeBtn.forEach(btn=>{
            btn.classList.remove("fixed-switch-btn");

        })
    }
    if(scrollHeight > 450){
        refBtn.classList.add("show-ref-btn");
    }
    else{
        refBtn.classList.remove("show-ref-btn");
    }
})
navLinks.forEach(links=>{
    links.addEventListener("click", (e)=>{
        navLinks.forEach(links=>{
            links.classList.remove("active");
        })
        e.target.classList.add("active");
        navbar.style.height = "52px";
        navbar.classList.remove("collapse-nav");
    })
})
toggleBtn.addEventListener("click", ()=>{
    navbar.style.height = "";
    navbar.classList.toggle("collapse-nav");
})
modeBtn.forEach(btn=>{
    btn.addEventListener("click", ()=>{
        document.documentElement.classList.toggle("dark-theme");
        icons.forEach(icon=>{
            icon.classList.toggle("fa")
            icon.classList.toggle("fa-sun-o")
        })
    })
})
window.addEventListener("DOMContentLoaded", ()=>{
    window.scrollTo(0,0);
    setTimeout(()=>{
        loader.classList.add("hide-loader");
        ScrollReveal({ 
            reset: true,
            distance: '80px',
            duration: 2000,
            delay: 150
        });
        ScrollReveal().reveal('.intro, .content-title, .service-title, .projects-title, .education-title ', { origin: 'top' });
        ScrollReveal().reveal('.hello, .my-name, .circle-bg', { origin: 'left' });
        ScrollReveal().reveal('.about-description, .description, .btn-read, .service-area, .projects-area, .education-wrapper, .container', { origin: 'bottom' });
    }, 2000)
})
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
    grabCursor: true,
    freeMode: true,
  });


