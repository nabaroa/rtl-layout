const rtlButton = document.getElementById("rtlButton");
rtlButton.addEventListener("click", rtl);
function rtl() {
  document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
}

const ltrButton = document.getElementById("ltrButton");
ltrButton.addEventListener("click", ltr);
function ltr() {
  document.getElementsByTagName("html")[0].setAttribute("dir", "ltr");
}
