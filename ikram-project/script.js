let hambIcon = document.querySelector(".hamb-icon");
let mobileList = document.querySelector(".mobile-list")
let Icon = hambIcon.querySelector("img");
hambIcon.addEventListener("click", function() {
  if(Icon.src.includes("hamb")) {
    Icon.src = "images/icon-close.svg";
    hambIcon.data = "images/icon-close.svg"
    mobileList.style.display = "block";
  } else {
    Icon.src = 'images/icon-hamburger.svg';
    hambIcon.data = "images/icon-hamburger.svg";
    mobileList.style.display = "none";

  }
  
})