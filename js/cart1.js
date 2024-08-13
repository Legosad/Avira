let products = localStorage.getItem("newProducts");
products = JSON.parse(products);
// console.log(products);
shopProduct(products);
function shopProduct(array) {
  document.querySelector(".cards").innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    let container = document.createElement("div");
    container.classList.add("card");
    let template = `
        <i class="fa-solid fa-x remove" id="${element.id}"></i>
        <img src="${element.image.slice(5, -2)}" alt="" />
        <div class="content">
          <h3>${element.name}</h3>
          <p>${element.description}</p>
          <div class="specifications">
            <div class="size">
              <div class="current">
                <p>SIZE:</p>
                <select>
                  <option>XS</option>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
            <div class="quantity">
              <p>QTY:</p>
              <div class="counter">
                <span class="num">${element.qty}</span>
                <span class="minus">-</span>
                <span class="plus">+</span>
              </div>
            </div>
          </div>
          <div class="price">
            <p class="actualP">${element.prevPrice}</p>
            <span class="discountedP">${element.price}</span>
          </div>
          <div class="delivery">
            <i class="fa-regular fa-circle-check"></i>
            <p>Delivery by 9th Jan, 2023</p>
          </div>
        </div>`;
    container.innerHTML = template;
    document.querySelector(".cards").append(container);
  }
}
