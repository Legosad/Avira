let objAddress = localStorage.getItem("address");
objAddress = JSON.parse(objAddress);
console.log(objAddress);

let selection = document.querySelectorAll(".select");
console.log(selection);
selection.forEach((element) => {
  // element.classList
  element.addEventListener("click", function (e) {
    target = e.target;
    target.classList.toggle("fa-solid");
    target.classList.toggle("fa-regular");
    mainDiv = target.closest(".card");
    // console.log(mainDiv, target);
  });
});

let trash = document.querySelectorAll(".trash");
trash.forEach((element) => {
  element.addEventListener("click", function (e) {
    target = e.target;
    // debugger;
    mainDiv = target.closest(".card");
    // mainDiv.remove();
    let mobile = mainDiv.querySelector("#mobile").innerHTML.slice(8);
    console.log(mobile);
    // console.log(objAddress);
    let index = objAddress.findIndex((a) => {
      if ((a.phone = mobile)) return a;
    });
    console.log(index);
    console.log(objAddress[index]);
    objAddress.splice(index, 1);
    localStorage.setItem("address", JSON.stringify(objAddress));
  });
});
