// Slider
const carousel = document.querySelector(".carousel");
const iconsBtn = document.querySelectorAll("i");
const firstImg = document.querySelectorAll("img")[0];
const firstImgWidth = firstImg.clientWidth + 575;
const carouselWidth = carousel.scrollWidth - carousel.clientWidth;
console.log(firstImg.clientWidth)

const showHideicons = ()=>{
  iconsBtn[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  iconsBtn[1].style.display = carousel.scrollLeft == carouselWidth ? "none": "block";
}
iconsBtn.forEach(icons=>{
  icons.addEventListener("click", ()=>{
    carousel.scrollLeft += icons.id == "left" ? -firstImgWidth  : firstImgWidth;
    debugger
    showHideicons();
    setTimeout(()=>{
      showHideicons()
    },60)
  })
})
let dragFlag = false;
const mousedrag = (e)=>{
  dragFlag = true;
  prevDrag = e.pageX || e.touches[0].pageX;
  prevScroll = carousel.scrollLeft;
}
const dragging = (e)=>{
  if(!dragFlag) return;
  e.preventDefault();
  let positionDiff = (e.pageX || e.touches[0].pageX) - prevDrag;
  carousel.scrollLeft =  prevScroll - positionDiff; 
  showHideicons()
}
const stopMouseDrag = (e)=>{
  dragFlag = false;
}
carousel.addEventListener("mousedown", mousedrag);
carousel.addEventListener("touchstart", mousedrag);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
carousel.addEventListener("mouseup",stopMouseDrag);
carousel.addEventListener("mouseleave",stopMouseDrag);
carousel.addEventListener("touchend",stopMouseDrag)


// Transition

const divElements = document.querySelectorAll(".divBox");
const imgElements= document.querySelectorAll(".photos");
for(let i=0 ; i < divElements.length; i++){
  divElements[i].addEventListener("mouseover",()=>{
    if(divElements[i].id == "graphicDiv"){
      setTimeout(()=>{
        imgElements[i].style.left = "-186px";
  }, 5);
    }
    else if(divElements[i].id =="appDiv"){
      setTimeout(()=>{
        imgElements[i].style.top = "88px";
      },5)
    }
    else if(divElements[i].id =="uiDiv"){
      setTimeout(()=>{
        imgElements[i].style.top = "88px";
      },5)
    }
    else if(divElements[i].id =="lustraDiv"){
      setTimeout(()=>{
        imgElements[i].style.left = "-186px";
      },5)
    }
    else if(divElements[i].id =="photoDiv"){
      setTimeout(()=>{
        imgElements[i].style.left = "-158px";
      },5)
    }
    else if(divElements[i].id =="motionDiv"){
      setTimeout(()=>{
        imgElements[i].style.left = "-190px";
      },5)
    }
  })
  
  divElements[i].addEventListener("mouseleave",()=>{
    if(divElements[i].id == "graphicDiv"){
      setTimeout(()=>{
        imgElements[i].style.left = "0px";
  }, 5);
    }
    else if(divElements[i].id =="uiDiv"){
      setTimeout(()=>{
        imgElements[i].style.top = "0px";
  }, 5);
    }
    else if(divElements[i].id =="appDiv"){
      setTimeout(()=>{
        imgElements[i].style.top = "0px";
  }, 5);
    }
    else if(divElements[i].id =="lustraDiv"){
      setTimeout(()=>{
        imgElements[i].style.left = "0px";
  }, 5);
    }
    else if(divElements[i].id =="photoDiv"){
      setTimeout(()=>{
        imgElements[i].style.left = "0px";
      },5)
    }
    else if(divElements[i].id =="motionDiv"){
      setTimeout(()=>{
        imgElements[i].style.left = "0px";
      },5)
    }
  })
}



