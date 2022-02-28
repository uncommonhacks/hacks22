var img1 = new Image();


var norm_width = window.innerWidth;
var norm_factor = norm_width/2048;


img1.src = "assets/panel_1_ver.png";
img1.onload = function(){
    // norm_width = document.getElementById("panel1").style.inner;
    var height = img1.height;
    var width = img1.width;
    // console.log(height/width);
    // console.log(height);
    console.log(norm_width);
    norm_factor = norm_width/width;
    console.log("normy")
    console.log(norm_factor);
    // code here to use the dimensions
    // document.getElementById("panel1").style.height=height/width*norm_width;
    console.log(document.getElementById("panel1").style.height);
    //   document.getElementById("panel1").style.width=height;
};



var img2 = new Image();

img2.src = "assets/panel_2_hor.png";
img2.onload = function(){
    console.log("chicken");
    console.log(img2.width/img1.width);
    console.log("norm_fact")
    console.log(norm_factor);
    var height = img2.height;
    var width = img2.width;
    console.log("weiner");
    console.log(width/height);
    // code here to use the dimensions
    // document.getElementById("panel2").style.height=height*norm_factor;
    // document.getElementById("panel2").style.width=width*norm_factor;
    //   document.getElementById("panel1").style.width=height;
};