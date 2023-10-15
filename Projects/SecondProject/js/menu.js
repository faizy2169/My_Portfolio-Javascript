const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const menuContent = document.querySelector(".section-container");
const btnContent = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded",()=>{
    displayMenuContent(menu);
    displayMenuButtons();
})
const displayMenuContent = (menuItem)=>{
    const getContent = menuItem.map((item)=>{
        return ` <div class="col-xl-6 col-lg-6 mb-md-5 mb-5 pl-md-0 pl-sm-0">
                    <div class="row justify-content-xl-start justify-content-center">
                        <div class="col-xl-5 col-lg-5 col-md-4 col-sm-5 col-12">
                            <img src="${item.img}" class="img-thumbnail" alt="">
                        </div>
                        <div class="col-md-7 col-xl-7 col-lg-7 col-sm-7 col-12 mt-md-0 mt-3 pl-md-0 pl-sm-0">
                            <span class="d-flex justify-content-between">
                                <span class="title">${item.title}</span>
                                <span class="float-right amount">$ ${item.price}</span>
                            </span>
                            <hr class="title-border">
                            <p class="description">${item.desc}</p>
                        </div>
                    </div>
                </div>`
    })
    menuContent.innerHTML = getContent.join("");
}
const displayMenuButtons = ()=>{
    const getBtns = menu.reduce((values, item)=>{
        values = Object.values(values);
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values
    },["all"])
    return getBtns
}
const getBtnVar = displayMenuButtons();
var btnElements = getBtnVar.map(element=>{
    return `<button type="button" class="btn-search" id=${element}>${element}</button>`
})
btnElements = btnElements.join("");
btnContent.innerHTML = btnElements;
const btns = document.querySelectorAll(".btn-search");
btns.forEach(btnItem=>{
  btnItem.addEventListener("click", ()=>{
    const filterData = menu.filter(content=>{
      if(btnItem.id === content.category){
          return content;
      }
      else if(btnItem.id === "all"){
        return content
      }
    })
    displayMenuContent(filterData)
  })
})