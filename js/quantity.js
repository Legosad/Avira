// let num = document.querySelector(".num");
let plus = document.querySelectorAll(".plus");
let minus = document.querySelectorAll(".minus");
let remove = document.querySelectorAll(".remove");

plus.forEach((element) => {
  element.addEventListener("click", (e) => {
    target = e.target;
    // console.log(target);
    // debugger;
    let div = target.closest(".card");
    let num = div.querySelector(".num");
    a = +num.innerHTML;
    let initialActualPrice =
      +div.querySelector(".actualP").innerHTML.slice(4) /
      +num.innerHTML.slice(1);
    let initialDiscountedPrice =
      +div.querySelector(".discountedP").innerHTML.slice(4) /
      +num.innerHTML.slice(1);
    // console.log(initialActualPrice);
    // console.log(initialDiscountedPrice);
    a++;
    a = a < 10 ? "0" + a : a;
    // console.log(a);
    // console.log(div);
    num.innerHTML = a;
    let arr = localStorage.getItem("newProducts");
    arr = JSON.parse(arr);
    let remove = div.querySelector(".remove");
    // let id = remove.getAttribute("id");
    // console.log(id);
    let index = arr.findIndex((a) => {
      if (a.id === remove.getAttribute("id")) {
        return a;
      }
    });
    // console.log(index);
    b = a * initialActualPrice;
    // console.log(b);
    if (b !== 0) div.querySelector(".actualP").innerHTML = "Rs. " + b;
    c = a * initialDiscountedPrice;
    arr[index].qty = num.innerHTML;
    // console.log(c);
    div.querySelector(".discountedP").innerHTML = "Rs. " + c;
    arr[index].price = div.querySelector(".discountedP").innerHTML;
    arr[index].prevPrice = div.querySelector(".actualP").innerHTML;

    // console.log(b);
    // arr[index].price = "Rs." + b;
    // // console.log(arr);
    localStorage.setItem("newProducts", JSON.stringify(arr));
  });
});
minus.forEach((element) => {
  element.addEventListener("click", (e) => {
    target = e.target;
    // debugger;
    let div = target.closest(".card");
    let num = div.querySelector(".num");
    a = num.innerHTML;
    // debugger;
    let arr = localStorage.getItem("newProducts");
    arr = JSON.parse(arr);
    let remove = div.querySelector(".remove");
    let index = arr.findIndex((a) => {
      if (a.id === remove.getAttribute("id")) {
        return a;
      }
    });
    let initialActualPrice = arr[index].prevPrice.slice(4);
    let initialDiscountedPrice = arr[index].price.slice(4);
    // console.log(initialActualPrice);
    // console.log(initialDiscountedPrice);
    initialActualPrice = +initialActualPrice / a;
    initialDiscountedPrice = +initialDiscountedPrice / a;
    // console.log(a);
    if (a > 1) {
      a--;
      a = a < 10 ? "0" + a : a;
      // console.log(a);
      num.innerHTML = a;
    }
    arr[index].qty = a;
    initialActualPrice = a * initialActualPrice;
    initialDiscountedPrice = a * initialDiscountedPrice;
    arr[index].price = "Rs. " + initialDiscountedPrice;
    if (initialActualPrice !== 0)
      arr[index].prevPrice = "Rs. " + initialActualPrice;
    // console.log(index);
    localStorage.setItem("newProducts", JSON.stringify(arr));
    div.querySelector(".actualP").innerHTML = arr[index].prevPrice;
    div.querySelector(".discountedP").innerHTML = arr[index].price;
  });
});

remove.forEach((element) => {
  element.addEventListener("click", (e) => {
    // debugger;
    target = e.target;
    let arr = localStorage.getItem("newProducts");
    arr = JSON.parse(arr);
    // console.log(arr);
    let id = target.getAttribute("id");
    // console.log(id);
    // let find = arr.find((a) => {
    //   if (a.id === target.getAttribute("id")) {
    //     return a;
    //   }
    // });
    // console.log(find);
    //index
    let index = arr.findIndex((a) => {
      if (a.id === target.getAttribute("id")) {
        return a;
      }
    });
    // console.log(index);
    arr.splice(index, 1);
    // console.log(arr);
    localStorage.setItem("newProducts", JSON.stringify(arr));
    // let index = arr.findIndex((a) => {
    //   return (a.id = id);
    // });
    // console.log(index);
    // debugger;
    target.closest(".card").remove();
  });
});
