var s = skrollr.init();
if (s.isMobile() || (window.Width < 913)) {
    s.destroy();
}
function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
  }
function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }
window.addEventListener("scroll", function(){
    console.log(window.innerWidth)
    if (s.isMobile() || (window.innerWidth < 913)) {
        s.destroy();
    }
    else {
        s = skrollr.init();
    }
    // console.log("scrolling");
    var target=document.querySelectorAll('.par');
    var i=0, len=target.length;
        for(i; i<len; i++){
            var pos=window.pageYOffset * target[i].dataset.rate;
            target[i].style.transform='translate('+pos+'px, 0px)';
        }
    if (window.pageYOffset > vw(130)) {
        document.querySelector('.chicken').style.height=0;
    }
    else {
        document.querySelector('.chicken').style.height=vh(50);
    }
});