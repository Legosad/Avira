let heart = document.querySelectorAll(".heart-icon");
heart.forEach((element) => {
  element.addEventListener("click", function (e) {
    target = e.target;
    // debugger;
    // console.log(target);
    target.classList.toggle("fa-solid");
    target.classList.toggle("fa-regular");
    mainDiv = target.closest(".card");
    // console.log(mainDiv);
    let idOfTarget = mainDiv.getAttribute("id");
    // console.log(idOfTarget);
    // console.log(data);
    let favIndex = data.findIndex((a) => a.id === idOfTarget);
    // console.log(favIndex);
    let favobject = localStorage.getItem("favouritesObject");
    if (favobject !== null) {
      favobject = JSON.parse(favobject);
      let favItems = favobject.filter((a) => a.id === data[favIndex].id);
      if (favItems.length === 0) {
        favobject.push(data[favIndex]);
        localStorage.setItem("favouritesObject", JSON.stringify(favobject));
      } else if (favItems.length !== 0) {
        let removeIndex = favobject.findIndex((a) => a === favItems[0]);
        favobject.splice(removeIndex, 1);
        localStorage.setItem("favouritesObject", JSON.stringify(favobject));
      }
      // for(index=0; index < favobject.length; index++){
      //     if(favobject[index].id === data[favIndex].id){
      //         favobject[index].remove();
      //     }
      //     else if(favobject[index].id !== data[favIndex].id){
      //         favouritesObject.push(data[favIndex]);
      //         localStorage.setItem("favouritesObject", JSON.stringify(favouritesObject));
      //     }
      // }
    } else {
      let favobject = [];
      favobject.push(data[favIndex]);
      localStorage.setItem("favouritesObject", JSON.stringify(favobject));
      //   console.log(favobject);
    }
  });
});
