let checkout = localStorage.getItem("bill");
let prd = localStorage.getItem("newProducts");
checkout = JSON.parse(checkout);
prd = JSON.parse(prd);
// console.log(checkout);
// console.log(prd);

let billDetails = document.querySelector(".bill-details");
// console.log(billDetails);
billDetails.innerHTML = "";
let template = `
<h3>PRICE DETAILS (${prd.length} ITEMS)</h3>
<div class="total-mrp">
  <p>Total MRP</p>
  <p>Rs. ${checkout.sum}</p>
</div>
<div class="discount-mrp">
  <p>Discount on MRP</p>
  <span>-Rs. ${checkout.discount}</span>
</div>
<div class="coupon-discount">
  <p>Coupon Discount</p>
  <p>Rs. 0</p>
</div>
<div class="delivery-charge">
  <p>Delivery Charge</p>
  <span>Free</span>
</div>
<hr />
<div class="total-amount">
  <p>Total Amount</p>
  <span>Rs. ${checkout.add}</span>
</div>
<a href="/shipping.html">
  <p>Place Order</p>
  <i class="fa-solid fa-arrow-right-long"></i>
</a>`;
billDetails.innerHTML = template;
