showProduct(data);

function showProduct(productArray) {
  document.querySelector(".products").innerHTML = "";
  for (let index = 0; index < productArray.length; index++) {
    const element = productArray[index];
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
              <i class="fa-regular fa-heart heart-icon"></i>
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
    document.querySelector(".products").append(container);
    // debugger;
    document.getElementById(
      `${element.id}`
    ).style.backgroundImage = `url(${element.productimg})`;
    let productNumber = document.querySelector(".category-products");
    productNumber.innerHTML = `${productArray.length}`;
  }
}
