// $(document).ready(function(){
//     $('.list').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         arrows :false,
//         autoplay :true,
//     });
// });

$(".serv").slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

let openShopping = document.querySelector(".shopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
  body.classList.add("active");
});

let products = [
  {
    id: 1,
    name: "Hair Cut",
    image: "2.jpg",
    price: 80,
  },
  {
    id: 2,
    name: "Beard Cut",
    image: "4.png",
    price: 60,
  },
  {
    id: 3,
    name: "Curly or Wavy",
    image: "1.jpg",
    price: 50,
  },

  {
    id: 4,
    name: "Hair Protein",
    image: "3.jpg",
    price: 700,
  },

  {
    id: 5,
    name: "Gold Package",
    image: "5.jpg",
    price: 1200,
  },
  {
    id: 6,
    name: "Diamond Package",
    image: "6.jpg",
    price: 2000,
  },
  {
    id: 7,
    name: "Boy,s Haircut",
    image: "7.jpg",
    price: 60,
  },
  {
    id: 8,
    name: "Deep Facial Cleaning",
    image: "8.png",
    price: 300,
  },
];
let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
            <img src="images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()} EGP</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    // copy product form list to list card
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "success",
    title: "Item Successfully Added",
  });
  reloadCard();
}
function reloadCard() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;
    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
                <div><img src="images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()} EGP</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity - 1
      })">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${
        value.quantity + 1
      })">+</button>
                </div>`;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCard();
}

var typed = new Typed("#typed", {
  strings: [
    "Salon Hossam Hassan",
    "Mummar Gaddafi Street",
    "between Al-Halo and Saeed",
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});






let num = document.querySelectorAll(".num");
let section = document.querySelector(".stats");
let started = false; // Function Started ? No


function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}




let btn =document.querySelector(".pop");

btn.onclick = function(){
    window.scrollTo({
        left : 0 ,
        top : 0,
        behavior :"smooth"
    });
};


window.onscroll = function() {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      num.forEach((num) => startCount(num));
      started = true;
    }
  }

  if (window.scrollY >= 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};





window.onload = function(){
  Swal.fire({
    title: "Welcome!",
    text: "To Sallon Hossam Hassan",
    imageUrl: "images/Gallery-150x150.png",
    imageWidth: 300,
    imageHeight: 100,
    imageAlt: "Custom image",
    confirmButtonColor :"#000",
    confirmButtonText :"Close"
  });
}