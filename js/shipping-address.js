let openForm = document.querySelector(".open-form");
let formContainer = document.querySelector(".form-container");
openForm.addEventListener("click", function () {
  formContainer.style.display = "flex";
});

window.addEventListener("click", function (e) {
  if (e.target === formContainer) {
    formContainer.style.display = "none";
  }
});
let close = document.querySelector(".close");
close.addEventListener("click", function () {
  formContainer.style.display = "none";
});

let addAddress = document.querySelector(".add-address");
addAddress.addEventListener("click", function (e) {
  let target = e.target;
  console.log(target);
  let mainDiv = target.closest(".form-container");
  //   console.log(mainDiv);
  let inputs = mainDiv.querySelectorAll("input");
  inputs.forEach((element) => {
    if (element.value == "") {
      alert("Please fill all fields");
    }
  });
  let name = mainDiv.querySelector("#name").value;
  let address = mainDiv.querySelector("#address").value;
  let city = mainDiv.querySelector("#city").value;
  let zip = mainDiv.querySelector("#zip").value;
  let phone = mainDiv.querySelector("#phone").value;
  let addressObject = { name, address, city, zip, phone };
  console.log(addressObject);

  let allAddress = localStorage.getItem("address");
  if (allAddress !== null) {
    allAddress = JSON.parse(allAddress);
    console.log(allAddress);
    let filteredItems = allAddress.filter(
      (a) => a.phone === addressObject.phone
    );
    console.log(filteredItems);
    if (filteredItems.length === 0) {
      allAddress.push(addressObject);
      localStorage.setItem("address", JSON.stringify(allAddress));
    } else {
      allAddress = allAddress.map((b) => b);
      console.log(allAddress);
      localStorage.setItem("address", JSON.stringify(allAddress));
    }
  } else {
    allAddress = [];
    allAddress.push(addressObject);
    localStorage.setItem("address", JSON.stringify(allAddress));
    console.log(allAddress);
  }
  mainDiv.querySelector("#name").value = "";
  mainDiv.querySelector("#address").value = "";
  mainDiv.querySelector("#city").value = "";
  mainDiv.querySelector("#zip").value = "";
  mainDiv.querySelector("#phone").value = "";
});

//Template literals
let address = localStorage.getItem("address");
address = JSON.parse(address);
showAddress(address);
function showAddress(array) {
  let cards = document.querySelector(".cards");
  cards.innerHTML = "";
  for (i = 0; i < array.length; i++) {
    let element = array[i];
    let container = document.createElement("div");
    container.classList.add("card");
    let template = ` <div class="select">
        <i class="fa-regular fa-circle"></i>
        </div>
        <div class="address">
        <div class="category">
          <div id="name">${element.name}</div>
          <p id="home">Home</p>
          <p id="office">Office</p>
        </div>
        <div id="address">${element.address}</div>
        <div id="city">${element.city}</div>
        <div id="postal-code">${element.zip}</div>
        <div id="mobile">Mobile: ${element.phone}</div>
        </div>
        <div class="change">
        <i class="fa-solid fa-trash trash"></i>
        </div>`;
    container.innerHTML = template;
    cards.append(container);
  }
}
