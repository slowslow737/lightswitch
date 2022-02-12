function toggle() {
  var element = document.body;
  element.classList.toggle("LightOff");
}

function changeImg() {
  var image = document.getElementById("Lightswitch");
  if (image.src.match("img/lightswitch-icon-on.jpg")) {
    image.src = "img/lightswitch-icon-off.jpg";
  } else {
    image.src = "img/lightswitch-icon-on.jpg";
  }
}
