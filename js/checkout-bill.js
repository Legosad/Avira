//Actual Price
let actualP = document.querySelectorAll(".actualP");
let sum = 0;
actualP.forEach((element) => {
  let actualPrice = element.innerHTML;
  //   debugger;
  //   console.log(actualPrice.slice(4));
  if (actualPrice == "") {
    sum = sum;
  } else {
    let aPrice = actualPrice.replace("Rs. ", "");
    aPrice = parseInt(aPrice);
    sum = sum + aPrice;
  }
});
// console.log(sum);

//Discounted Price
let discountedP = document.querySelectorAll(".discountedP");
let add = 0;
discountedP.forEach((element) => {
  let discountPrice = element.innerHTML;
  let dPrice = parseInt(discountPrice.slice(4));
  add = add + dPrice;
});
// console.log(add);

//Total discount
let discount = sum - add;
// console.log(discount);
let bill = { sum, add, discount };
// console.log(bill);
localStorage.setItem("bill", JSON.stringify(bill));
