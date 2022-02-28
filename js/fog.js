window.addEventListener("scroll", function(){
    console.log("scrolling");
    var target=document.querySelectorAll('.par');
    var i=0, len=target.length;
        for(i; i<len; i++){
            var pos=window.pageYOffset * target[i].dataset.rate;
            target[i].style.transform='translate('+pos+'px, 0px)';
        }
});