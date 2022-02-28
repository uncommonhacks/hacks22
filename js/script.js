var img1 = new Image();

var norm_width = window.innerWidth;
var norm_factor = norm_width / 2048;

img1.src = "assets/panel_1_ver.png";
img1.onload = function () {
  // norm_width = document.getElementById("panel1").style.inner;
  var height = img1.height;
  var width = img1.width;
  // console.log(height/width);
  // console.log(height);
  console.log(norm_width);
  norm_factor = norm_width / width;
  console.log("normy");
  console.log(norm_factor);
  // code here to use the dimensions
  // document.getElementById("panel1").style.height=height/width*norm_width;
  console.log(document.getElementById("panel1").style.height);
  //   document.getElementById("panel1").style.width=height;
};

var img2 = new Image();

img2.src = "assets/panel_2_hor.png";
img2.onload = function () {
  console.log("chicken");
  console.log(img2.width / img1.width);
  console.log("norm_fact");
  console.log(norm_factor);
  var height = img2.height;
  var width = img2.width;
  console.log("weiner");
  console.log(width / height);
  // code here to use the dimensions
  // document.getElementById("panel2").style.height=height*norm_factor;
  // document.getElementById("panel2").style.width=width*norm_factor;
  //   document.getElementById("panel1").style.width=height;
};
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  let div = modal;
  var Mwidth = div.offsetWidth;
  var Mheight = div.offsetHeight;
  var Wwidth = window.innerWidth;
  var Wheight = window.innerHeight;
  div.style.position = "absolute";
  div.style.top =
    (Wheight - Mheight) / 2 +
    window.pageYOffset -
    window.innerWidth * 0.06 +
    "px";
  div.style.left =
    (Wwidth - Mwidth) / 2 +
    window.pageXOffset -
    window.innerWidth * 0.08 +
    "px";
  div.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// Get the modal
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal
var btn2 = document.getElementById("modalButton2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function () {
  let div = modal2;
  var Mwidth = div.offsetWidth;
  var Mheight = div.offsetHeight;
  var Wwidth = window.innerWidth;
  var Wheight = window.innerHeight;
  div.style.position = "absolute";
  //   console.log(Mwidth, window.innerWidth, window.innerHeight, "aiya");
  div.style.top =
    (Wheight - Mheight) / 2 +
    window.pageYOffset -
    window.innerWidth * 0.06 +
    "px";
  div.style.left =
    (Wwidth - Mwidth) / 2 +
    window.pageXOffset -
    window.innerWidth * 0.08 +
    "px";
  div.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  console.log("sad");
  modal2.style.display = "none";
};

// Get the modal
var modal3 = document.getElementById("modal3");

// Get the button that opens the modal
var btn3 = document.getElementById("modalButton3");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on the button, open the modal
btn3.onclick = function () {
  let div = modal3;
  var Mwidth = div.offsetWidth;
  var Mheight = div.offsetHeight;
  var Wwidth = window.innerWidth;
  var Wheight = window.innerHeight;
  div.style.position = "absolute";
  div.style.top =
    (Wheight - Mheight) / 2 +
    window.pageYOffset -
    window.innerWidth * 0.06 +
    "px";
  div.style.left =
    (Wwidth - Mwidth) / 2 +
    window.pageXOffset -
    window.innerWidth * 0.08 +
    "px";
  div.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span3.onclick = function () {
  modal3.style.display = "none";
};

// Get the modal
var modal4 = document.getElementById("modal4");

// Get the button that opens the modal
var btn4 = document.getElementById("modalButton4");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks on the button, open the modal
btn4.onclick = function () {
  let div = modal4;
  var Mwidth = div.offsetWidth;
  var Mheight = div.offsetHeight;
  var Wwidth = window.innerWidth;
  var Wheight = window.innerHeight;
  div.style.position = "absolute";
  div.style.top =
    (Wheight - Mheight) / 2 +
    window.pageYOffset -
    window.innerWidth * 0.06 +
    "px";
  div.style.left =
    (Wwidth - Mwidth) / 2 +
    window.pageXOffset -
    window.innerWidth * 0.08 +
    "px";
  div.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span4.onclick = function () {
  modal4.style.display = "none";
};
