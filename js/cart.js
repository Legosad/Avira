let addToCart = document.querySelectorAll(".add-cart");
addToCart.forEach((element) => {
  element.addEventListener("click", function (e) {
    let target = e.target;
    let mainDiv = target.closest("div");
    let prevPrice = mainDiv.querySelector(".actual-price").innerHTML;
    // console.log(prevPrice);
    let price = mainDiv.querySelector(".final-price").innerHTML;
    let name = mainDiv.querySelector(".product-name").innerHTML;
    let description = mainDiv.querySelector(".product-description").innerHTML;
    let id = mainDiv.querySelector(".card").getAttribute("id");
    let image = mainDiv.querySelector(".card").style.backgroundImage;
    let qty = "01";
    // console.log(image);
    let product = { prevPrice, price, name, description, id, image, qty };
    // console.log(product);
    let cartItems = localStorage.getItem("newProducts");
    if (cartItems !== null) {
      cartItems = JSON.parse(cartItems);
      // console.log(cartItems);
      let filteredItems = cartItems.filter((a) => a.id === product.id);
      // console.log(filteredItems);
      if (filteredItems.length === 0) {
        cartItems.push(product);
        localStorage.setItem("newProducts", JSON.stringify(cartItems));
      } else {
        cartItems = cartItems.map((b) => b);
        // console.log(cartItems);
        localStorage.setItem("newProducts", JSON.stringify(cartItems));
      }
    } else {
      cartItems = [];
      cartItems.push(product);
      localStorage.setItem("newProducts", JSON.stringify(cartItems));
      // console.log(cartItems);
    }
  });
});
