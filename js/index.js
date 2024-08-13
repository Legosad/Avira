//Navbar
let bar = document.querySelector(".bars");
let navlist = document.querySelector(".navlist");

bar.addEventListener("click", function () {
  navlist.classList.toggle("hide-content");
});

///Navbar Cart icon
let cart = document.querySelector(".cart");
console.log(cart.innerHTML);

let productsObject = localStorage.getItem("newProducts");
productsObject = JSON.parse(productsObject);
console.log(productsObject);

if (productsObject.length < 10) {
  cart.innerHTML = " 0" + productsObject.length;
} else {
  cart.innerHTML = " " + productsObject.length;
}

//navbar fav icon
let fav = document.querySelector(".fav");

let objectFav = localStorage.getItem("favouritesObject");
objectFav = JSON.parse(objectFav);

if (objectFav.length < 10) {
  fav.innerHTML = " 0" + objectFav.length;
} else {
  fav.innerHTML = " " + objectFav.length;
}
