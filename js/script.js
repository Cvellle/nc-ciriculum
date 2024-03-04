window.addEventListener("load", rootFunction);

function rootFunction() {
  // body opacity
  document.querySelector("body").style.transition = "2s";
  document.querySelector("body").style.opacity = "1";

  // volume
  document.querySelectorAll("audio").forEach((element) => {
    element.volume = 0.03;
  });
}
