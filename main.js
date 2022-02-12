function toggle() {
  var element = document.body;
  element.classList.toggle("LightOff");
}

function changeImg() {
  var image = document.getElementById("Lightswitch");
  if (image.src.match("lightswitch-icon-on.jpg")) {
    image.src = "lightswitch-icon-off.jpg";
  } else {
    image.src = "lightswitch-icon-on.jpg";
  }
}
