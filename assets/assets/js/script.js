let menuBtn= document.getElementById('menu');
let menu= document.getElementById('main-navigation');
let headerBanner= document.getElementById('header-banner');
menuBtn.addEventListener('click',function(){
    menuBtn.classList.toggle('opened');
    menu.classList.toggle('-mt-[2000px]');
    
      
})
scrollBtn = document.getElementById("scrollToTop");

scrollBtn.addEventListener('click',function(){
    topFunction();
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollBtn.style.opacity = "1";
  } else {
    scrollBtn.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}