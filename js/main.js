const Onclick = (event) => {
  // this is a JS comment
  // console.log('this is a some text');

  let theHeading = document.querySelector(".main-heading");
  let theIcons = document.querySelectorAll(".icon");

  function logElement() {
    console.log("clicked on an element: ", event.Target.id);
  }

  theHeading.addEventListener("click", `heading Clicked`);

  theIcons.forEach((icon) => icon.addEventListener("click", `Clicked`));
};
