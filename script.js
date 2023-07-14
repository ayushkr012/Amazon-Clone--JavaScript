import { todayDeal } from "./today_deal.js";

//  ------------------------->         Image Slider Part Java Script     <-------------------------------

let slidebtnLeft = document.getElementById("slide-btn-left");
let slidebtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");

// console.log(imgItem.length-1) because image start with 0 indexing;
let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100;

slidebtnLeft.addEventListener("click", leftSliderBtn);

slidebtnRight.addEventListener("click", rightSliderBtn);

function leftSliderBtn() {
  if (startSlider < 0) {
    startSlider = startSlider + 100;
  }
  imgItem.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
}

function rightSliderBtn() {
  if (startSlider >= -endSlider + 100) {
    startSlider = startSlider - 100;
  }
  imgItem.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
}

function renderSlideAuto() {
  if (startSlider >= -endSlider + 100) {
    rightSliderBtn();
  } else {
    startSlider = +100;
  }
}
setInterval(renderSlideAuto, 2000);

// if (startSlider >= -endSlider + 100) {
//   // startslider 0 -100 -200 goes to -600  (so total count is 7 and endslider count is 7  )
//   startSlider = startSlider - 100; // so this resaon we +100 to end slider
// }

// ----------------------.> sideBar Navigation Part  -------------------------< //

const sidebarNavigation = document.getElementById(
  "sidebar-container-navigation-id"
);
const sidebarOpenNavigation = document.getElementById("open-nav-sidebar");
const sidebarCloseNavigation = document.getElementById(
  "sidebar-navigation-close"
);

sidebarOpenNavigation.addEventListener("click", () => {
  sidebarNavigation.classList.toggle("sidebar-show");
});

sidebarCloseNavigation.addEventListener("click", () => {
  sidebarNavigation.classList.toggle("sidebar-show");
});

// ------------------>Today Deals section ----------------------------<

let todayDealProductList = document.querySelector(".today_deal_product_list");
// console.log(todayDealProductList)

let todayDeallength = todayDeal.length;
let todayDealProductHTML = "";

for (let i = 0; i < todayDeallength; i++) {
  todayDealProductHTML += `
          <div class="today_deal_product_item">
            <div class="todayDeals_product_image">
                <img src=${todayDeal[i].image} />
            </div>
          <div class="discount-container">
            <a href="#">Up to ${todayDeal[i].discount}% off</a>
            <a href="#">${todayDeal[i].dealOfDay}</a>
          </div>
          <p>${todayDeal[i].des}</p>
        </div>
     `;
}

todayDealProductList.innerHTML = todayDealProductHTML;

console.log(todayDealProductHTML);
let today_deal_left_btn = document.getElementById("today_deal_btn_left");
let today_deal_right_btn = document.getElementById("today_deal_btn_right");
let today_deal_product_item = document.querySelectorAll(
  ".today_deal_product_item"
);

let startProduct = 0;
today_deal_left_btn.addEventListener("click", () => {
  if (startProduct < 0) {
    startProduct += 500;
  }

  if (startProduct > -1500) {
    today_deal_product_item.forEach((element) => {
      element.style.transform = `translateX(${startProduct}%)`;
    });
  }
});

today_deal_right_btn.addEventListener("click", () => {
  if (startProduct > -1000) {
    startProduct -= 500;
  }

  today_deal_product_item.forEach((element) => {
    element.style.transform = `translateX(${startProduct}%)`;
  });
});

// New collections form local Shops
const leftbtn = document.querySelector(".l-btn");
const rightbtn = document.querySelector(".r-btn");

rightbtn.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide");
  content.scrollLeft += 1200;
  event.preventDefault();
});

leftbtn.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide");
  content.scrollLeft -= 1200;
  event.preventDefault();
});

/* Up to 60% off | Kitchen appliances for your home */
const leftbtn1 = document.querySelector(".l-btn-1");
const rightbtn1 = document.querySelector(".r-btn-1");

rightbtn1.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-1");
  content.scrollLeft += 1200;
  event.preventDefault();
});

leftbtn1.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-1");
  content.scrollLeft -= 1200;
  event.preventDefault();
});

// Up to 50% off | Give your home the look it deserves
const leftbtn2 = document.querySelector(".l-btn-2");
const rightbtn2 = document.querySelector(".r-btn-2");

rightbtn2.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-2");
  content.scrollLeft += 1200;
  event.preventDefault();
});

leftbtn2.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-2");
  content.scrollLeft -= 1200;
  event.preventDefault();
});

// Up to 45% off | Furnitures from stores nearby
const leftbtn3 = document.querySelector(".l-btn-3");
const rightbtn3 = document.querySelector(".r-btn-3");

rightbtn3.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-3");
  content.scrollLeft += 1200;
  event.preventDefault();
});

leftbtn3.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-3");
  content.scrollLeft -= 1200;
  event.preventDefault();
});

// Related to item you've viewed
const leftbtn4 = document.querySelector(".l-btn-4");
const rightbtn4 = document.querySelector(".r-btn-4");

rightbtn4.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-4");
  content.scrollLeft += 1200;
  event.preventDefault();
});

leftbtn4.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-4");
  content.scrollLeft -= 1200;
  event.preventDefault();
});
// Up to 50% off | Summer fashion for women
const leftbtn5 = document.querySelector(".l-btn-5");
const rightbtn5 = document.querySelector(".r-btn-5");

rightbtn5.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-5");
  content.scrollLeft += 1200;
  event.preventDefault();
});

leftbtn5.addEventListener("click", function (event) {
  const content = document.querySelector(".product-slide-5");
  content.scrollLeft -= 1200;
  event.preventDefault();
});
