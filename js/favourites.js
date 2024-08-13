let favourites = localStorage.getItem("favouritesObject");
favourites = JSON.parse(favourites);
console.log(favourites);

showFavourites(favourites);

function showFavourites(array) {
  //Category number update
  let category = document.querySelector(".category");
  console.log(category.innerHTML);
  let categoryProducts = category.querySelector("#category-products");
  console.log(categoryProducts.innerHTML);
  categoryProducts.innerHTML = `${array.length}`;

  let products = document.querySelector(".products");
  products.innerHTML = "";
  for (index = 0; index < array.length; index++) {
    let element = array[index];
    let container = document.createElement("div");
    container.classList.add("product");
    let template = `
    <div class="card" id= "${element.id}">
          <div class="review">
            <div class="rating">
              <i class="fa-solid fa-star"></i>
              <p>${element.productrating}</p>
            </div>
            <div class="heart">
              <i class="fa-solid fa-heart heart-icon"></i>
            </div>
          </div>
        </div>
        <div class="card-description">
          <h3 class = "product-name">${element.productname}</h3>
          <p class = "product-description">${element.productdescription}</p>
          <br />
          <div class="price">
            <p class = "actual-price">${element.productprice}</p>
            <span class = "final-price">${element.productdiscounted}</span>
          </div>
        </div>
        <button class="add-cart">Add to Cart</button>`;
    container.innerHTML = template;
    products.append(container);
    document.getElementById(
      `${element.id}`
    ).style.backgroundImage = `url(${element.productimg})`;
  }
}
