// https://cdnjs.com/libraries/animejs
https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js

var slides = document.querySelector(".slider-items").children;
var nextSlide= document.querySelector(".right-slide");
var prevSlide= document.querySelector(".left-slide");
var totalSlides = slides.length;
var index = 0;

nextSlide.onclick= function(){
    next("next")
}

prevSlide.onclick= function(){
    next("prev");
}

function next(dir){

    if(dir == "next"){
        index++;
    if(index == totalSlides){
        index = 0;
    }  
}
    else{
        if(index == 0){
            index = totalSlides-1;
        }
        else{
            index--;
        }
    }
    for( i= 0 ; i<slides.length; i++){
        slides[i].classList.remove("active");
    }
   slides[index].classList.add("active");
}
function prev(dir){

}