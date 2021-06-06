window.addEventListener("scroll",function(event){
    var scroll=this.scrollY;
    
    if(scroll>0){
        document.getElementById("alterlogo").style.display="block";
        document.getElementById("logo").style.display="none";
        document.getElementById("alterlogo").style.animation="all 0.2s ease";
        document.getElementById("image").style.justifyContent="flex-start";
    }
    else{
        document.getElementById("alterlogo").style.display="none";
        document.getElementById("logo").style.display="block";
        document.getElementById("image").style.animation="none";
        document.getElementById("image").style.justifyContent="flex-end";
    }
});