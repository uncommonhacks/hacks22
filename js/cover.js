// https://stackoverflow.com/questions/44109314/javascript-calculate-with-viewport-width-height
function vw(v) {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (v * w) / 100;
  }
function vh(v) {
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (v * h) / 100;
  }
window.addEventListener("scroll", function(){
    if (screen.width < 912) {
        return;
    }
    var target=document.querySelectorAll('.cover');
    var i=0, len=target.length;
        for(i; i<len; i++){
            // console.log("ay");
            var pos=window.pageYOffset * target[i].dataset.rate;
            // console.log(pos);
            // calculating when top/bottom of window aligns with points

            //bottom of window aligns bottom of panel2
            var top = vw(67.2+140)-vh(100); //panel 1 height plus panel 2 height mimnus screen
            // console.log(top);
            
            //distance from (bottom of window = bottom of panel 2) to (top of window=top of panel2)
            var gap = vh(100)- vw(67.2);
            var offset = pos - top;

            // console.log(offset)
            if (offset <= 0) {
                target[i].style.opacity=0;
            }
            else if (offset <= 750 + gap){
                target[i].style.opacity=1;
            }
            else {
                // console.log("light");
                target[i].style.opacity=1-(offset-750-gap)/50;
            }
        }
});