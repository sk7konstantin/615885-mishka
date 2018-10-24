var nav = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');
var button = document.querySelector(".product__button");
var popup = document.querySelector(".modal-size");

nav.classList.remove('nav--nojs');

navToggle.addEventListener('click', function() {
  console.log("hello");
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});

button.addEventListener ("click", function(evt) {
  evt.preventDefault ();
  popup.classList.add('modal-size-show')
  console.log('hello')
});

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    if(popup.classList.contains("modal-size-show")) {
      popup.classList.remove("modal-size-show");
    }
  }
})
