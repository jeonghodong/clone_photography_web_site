let if_num = 0;
let logo_target = document.getElementById("h1_logo");

document.getElementById("trigger").addEventListener("click", function () {
  if (if_num === 0) {
    logo_target.style.filter = "invert(100%)";
    logo_target.style.transition = "1s";
    if_num++;
  } else {
    logo_target.style.filter = "invert(0%)";
    logo_target.style.transition = "2s";
    if_num--;
  }
});
