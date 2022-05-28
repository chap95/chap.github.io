window.addEventListener("scroll", (e) => {
  const scrollTop = document.body.scrollTop;
  const navbar = document.getElementsByTagName("nav")[0];
  const transitionElements = document.getElementsByClassName("--transition");

  if (scrollTop > 0) {
    navbar.style.backgroundColor = "white";
    for (const element of transitionElements) {
      element.style.color = "black";
    }
  } else {
    navbar.style.backgroundColor = "black";
    for (const element of transitionElements) {
      element.style.color = "white";
    }
  }
});
