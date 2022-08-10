const menuBtn = document.querySelector(".menu-btn");
const linksContainerEl = document.querySelector(".links-container");
const linksEl = document.querySelector(".links");
const navBarEl = document.querySelector(".nav-bar");
const productItem = document.querySelector(".product-item");
const filterEl = document.querySelector(".filter")
const product = [
    {
        id: 1,
        category: "Bed",
        title: "Hand Base Lamp",
        currentPrice: 35.00,
        oldPrice: 55.23,
        img: "img2/Image (1).png",
    },
    {
        id: 2,
        category: "Sofa",
        title: "Vintage Chair",
        currentPrice: 65.00,
        oldPrice: 95.17,
        img: "img2/880 1.png",
    },
    {
        id: 3,
        category: "Chair",
        title: "Lamp Tool",
        currentPrice: 35.00,
        oldPrice: 40.63,
        img: "img2/Image (3).png",
    },
    {
        id: 4,
        category: "Light",
        title: "Stylish Chair",
        currentPrice: 73.00,
        oldPrice: 105.16,
        img: "img2/Image (1).png",
    },
    {
        id: 5,
        category: "Bed",
        title: "Hand Base Lamp",
        currentPrice: 35.00,
        oldPrice: 55.23,
        img: "img2/Image (1).png",
    },
    {
        id: 6,
        category: "Sofa",
        title: "Vintage Chair",
        currentPrice: 65.00,
        oldPrice: 95.17,
        img: "img2/880 1.png",
    },
    {
        id: 7,
        category: "Chair",
        title: "Lamp Tool",
        currentPrice: 35.00,
        oldPrice: 40.63,
        img: "img2/Image (3).png",
    },
    {
        id: 8,
        category: "Light",
        title: "Stylish Chair",
        currentPrice: 73.00,
        oldPrice: 105.16,
        img: "img2/Image (1).png",
    },
    {
        id: 9,
        category: "Bed",
        title: "Hand Base Lamp",
        currentPrice: 35.00,
        oldPrice: 55.23,
        img: "img2/Image (1).png",
    },
    {
        id: 10,
        category: "Sofa",
        title: "Vintage Chair",
        currentPrice: 65.00,
        oldPrice: 95.17,
        img: "img2/880 1.png",
    },
    {
        id: 11,
        category: "Chair",
        title: "Lamp Tool",
        currentPrice: 35.00,
        oldPrice: 40.63,
        img: "img2/Image (3).png",
    },
    {
        id: 12,
        category: "Light",
        title: "Stylish Chair",
        currentPrice: 73.00,
        oldPrice: 105.16,
        img: "img2/Image (1).png",
    },
    {
        id: 13,
        category: "Desk",
        title: "Desk Shore",
        currentPrice: 73.00,
        oldPrice: 105.16,
        img: "img2/Image (4).png",
    },
    
]




window.addEventListener("DOMContentLoaded", ()=>{
    displayProductItem(product);
    displayProductButton();

});
 

function displayProductItem(proItems){
    let displayProduct = proItems.map((item)=>{

        return `<div class="single-item">
                    <h3>${item.title}</h3>
                    <div class="prize">
                        <p class="current-prize">$${item.currentPrice}</p>
                        <p class="former-prize">$${item.oldPrice}</p>
                    </div>
                    <span class="list-icon"><img src="img2/Ellipse 70.png" alt="" width="25px"></span>
                    <img src="${item.img}" alt="" class="product-img">
                </div>`;
    });
    displayProduct = displayProduct.join("")
    productItem.innerHTML = displayProduct
};



function displayProductButton(){
    const categories = product.reduce((values, item)=>{
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values
    }, ['All']);

    const categoryBtn = categories.map((category)=>{
        return `<button class="filter-btn" 
        data-id=${category}>${category}</button>`
    }).join("")
    filterEl.innerHTML = categoryBtn
    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach((btn)=>{
        btn.addEventListener("click", (e)=>{
            const category = e.currentTarget.dataset.id;
            const productCategory = product.filter((pItem)=>{
    
                if(pItem.category === category){
                    return pItem;
                }
            });
            
            if(category === 'All'){
                displayProductItem(product);
    
            }else{
                displayProductItem(productCategory);
    
            }

        });


    });
    
}


filterEl.addEventListener("click", (event)=>{
    const filterBtns = document.querySelectorAll(".filter-btn");
    const id = event.target.dataset.id
    if(id){
        filterBtns.forEach((btn)=>{
            btn.classList.remove("live")
        })
        event.target.classList.add("live")
    }
})


menuBtn.addEventListener("click", ()=>{
    const containerHeight = linksContainerEl.getBoundingClientRect().height
    const linksHeight = linksEl.getBoundingClientRect().height

    if(containerHeight === 0){
        linksContainerEl.style.height = `${linksHeight}px`;
    }else{
        linksContainerEl.style.height = 0;

    }
});




const scrollLink = document.querySelectorAll(".scroll-link")
scrollLink.forEach((link)=>{
    link.addEventListener("click", (e)=>{
        e.preventDefault()
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);

        const containerHeight = linksContainerEl.getBoundingClientRect().height
        const navHight = navBarEl.getBoundingClientRect().height
        let position = element.offsetTop

        if(navHight > 50){
            position = position + containerHeight
        }
        window.scrollTo({
            left: 0,
            top: position - navHight,
        });
        linksContainerEl.style.height = 0;

    });
});




const containerEl = document.querySelector(".search");
const magnifierEl = document.querySelector(".fa-search");
const inputEl = document.querySelector(".input");

magnifierEl.addEventListener("click", () => {
    containerEl.classList.toggle("active");
    inputEl.focus()
});





const search = ()=>{
    const searchEl = document.querySelector(".input").value.toUpperCase();
    const productItem = document.querySelector(".product-item");
    const singleItem = document.querySelectorAll(".single-item");
    const pName = productItem.getElementsByTagName("h3");
    
    for (let i = 0; i < pName.length; i++) {
        let run = singleItem[i].getElementsByTagName("h3")[0];
            
        if(run){
            let textValue = run.textContent || run.innerHTML
    
            if(textValue.toUpperCase().indexOf(searchEl) > -1){
                singleItem[i].style.display = "";
            }else{
                singleItem[i].style.display = "none";
            }
        }
    }
    
}


const startedEl = document.querySelector(".started")
const startedBtnEl = document.querySelectorAll(".started-btn")

    startedEl.addEventListener("click", (e)=>{
        const id = e.target.dataset.id

        if(id){
            startedBtnEl.forEach((btn)=>{
                btn.classList.remove("live")
            })
            e.target.classList.add("live")
        }
    })



const topLinkEl = document.querySelector(".top-link")
window.addEventListener("scroll", ()=>{
    const scrollheight = window.pageYOffset
    if(scrollheight > 400){
        topLinkEl.classList.add("show-link")
    }else{
        topLinkEl.classList.remove("show-link")
    }
})