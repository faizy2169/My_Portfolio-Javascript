const date = document.querySelector("#date");
const getDate = new Date();
date.innerHTML = getDate.getFullYear() + ".";
const toggleBtn = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
toggleBtn.addEventListener("click", ()=>{
    toggleBtn.classList.toggle("nav-toggle-toggle");
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`;
    }
    else{
        linksContainer.style.height = 0;
    }
})
const navbar = document.querySelector(".nav-center");
const topBtn = document.querySelector(".arrow-button");
const navLinks = document.querySelectorAll(".link");
window.addEventListener("scroll", ()=>{
    console.log(links.getBoundingClientRect().height);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight){
        navbar.classList.add("fixed-nav");
        navLinks.forEach(item=>{
            item.classList.add("navbar-links");
        })
    }
    else{
        navbar.classList.remove("fixed-nav");
        navLinks.forEach(item=>{
            item.classList.remove("navbar-links");
        })
    }
    if(scrollHeight > 500){
        topBtn.classList.add("show-arrow");
    }
    else{
        topBtn.classList.remove("show-arrow");
    }
})
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault();
        const id = link.getAttribute("href").slice(1,link.getAttribute("href").length);
        const element = document.getElementById(id);
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        let position = element.offsetTop - navHeight;
        if(!fixedNav){
            position = position - navHeight;
        }
        if(navHeight > 76){
            linksContainer.style.height = "0px";
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position,
        })
    })
})