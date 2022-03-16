var img1 = new Image();

var norm_width = window.innerWidth;
var norm_factor = norm_width / 2048;
let modal_objs = [];
let buttons_first_activated = false;

var s = skrollr.init();
if (s.isMobile()) {
    s.destroy();
}

img1.src = "assets/panel_1_ver.png";
img1.onload = function () {
  // norm_width = document.getElementById("panel1").style.inner;
  var height = img1.height;
  var width = img1.width;
  // //console.log(height/width);
  // //console.log(height);
  //console.log(norm_width);
  norm_factor = norm_width / width;
  //console.log("normy");
  //console.log(norm_factor);
  // code here to use the dimensions
  // document.getElementById("panel1").style.height=height/width*norm_width;
  //console.log(document.getElementById("panel1").style.height);
  //   document.getElementById("panel1").style.width=height;
};

var img3 = new Image();

img3.src = "assets/panel_3_and_4_waterfall_cave.png";
img3.onload = function () {
  var height = img3.height;
  var width = img3.width;
  // console.log(height/width);
};


var img2 = new Image();

img2.src = "assets/panel_2_hor.png";
img2.onload = function () {
  //console.log("chicken");
  //console.log(img2.width / img1.width);
  //console.log("norm_fact");
  //console.log(norm_factor);
  var height = img2.height;
  var width = img2.width;
  //console.log("weiner");
  //console.log(width / height);
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
  var w =
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0) /
    100;
  div.style.position = "relative";
  div.style.top = w / 10 + "vw";
  div.style.left = w + "vw";
  div.style.display = "block";
  modal_objs.push(div);
  //console.log(modal_objs);
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (
    modal_objs.length > 0 &&
    // buttons_clicked &&
    !modal_objs.includes(event.target)
  ) {
    // //console.log("yeet");
    if (!buttons_first_activated) {
      buttons_first_activated = true;
      return;
    }
    while (modal_objs.length > 0) {
      let curr = modal_objs.pop();
      curr.style.display = "none";
    }
    buttons_first_activated = false;
  }
};

// Get the modal
var modal2 = document.getElementById("modal2");

// Get the button that opens the modal
var btn2 = document.getElementById("modalButton2");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function () {
  // console.log("AA");
  let div = modal2;
  var w =
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0) /
    100;
  div.style.position = "relative";
  div.style.top = w / 10 + "vw";
  div.style.left = w + "vw";
  div.style.display = "block";
  modal_objs.push(div);
};

// When the user clicks on <span> (x), close the modal
span2.onclick = function () {
  //console.log("sad");
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
  var w =
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0) /
    100;
  div.style.position = "relative";
  div.style.top = w / 10 + "vw";
  div.style.left = w + "vw";
  div.style.display = "block";
  modal_objs.push(div);
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
  var w =
    Math.max(document.documentElement.clientWidth, window.innerWidth || 0) /
    100;
  div.style.position = "relative";
  div.style.top = w / 10 + "vw";
  div.style.left = w + "vw";
  div.style.display = "block";
  modal_objs.push(div);
};

// When the user clicks on <span> (x), close the modal
span4.onclick = function () {
  modal4.style.display = "none";
};

let headShotsList = [
  "assets/member_photos/antonoutkine.jpg",
  "assets/member_photos/emilybae.jpeg",
  "assets/member_photos/irinastamm.jpeg",
  "assets/member_photos/jimliu.jpg",
  "assets/member_photos/joeaulicino.jpeg",
  "assets/member_photos/katelu.jpg",
  "assets/member_photos/madhavvats.jpg",
  "assets/member_photos/michellechen.jpg",
  "assets/member_photos/nickliu.png",
  "assets/member_photos/nicoleli.jpg",
  "assets/member_photos/palashgoiporia.JPG",
  "assets/member_photos/reneehuang.jpeg",
  "assets/member_photos/samanthachen.JPG",
  "assets/member_photos/spencerng.jpg",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

let currentPicture = getRandomInt(headShotsList.length);
let headShot = document.getElementById("headshots");

headShot.setAttribute("src", headShotsList[currentPicture]);
setInterval(() => {
  currentPicture =
    currentPicture == headShotsList.length - 1 ? 0 : currentPicture + 1;
  headShot.setAttribute("src", headShotsList[currentPicture]);
}, 2000);
