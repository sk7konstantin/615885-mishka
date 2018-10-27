var nav = document.querySelector('.nav');
var navToggle = document.querySelector('.nav__toggle');
var buttons = document.querySelectorAll(".product__button--js");
var popup = document.querySelector(".modal-size");
var button;

nav.classList.remove('nav--nojs');

navToggle.addEventListener('click', function() {
  if (nav.classList.contains('nav--closed')) {
    nav.classList.remove('nav--closed');
    nav.classList.add('nav--opened');
  } else {
    nav.classList.add('nav--closed');
    nav.classList.remove('nav--opened');
  }
});

//модальное окно

for (var i = 0; i < buttons.length; i++) {
  button = buttons[i];
  button.addEventListener('click', modalShow);
}

function modalShow(evt) {
  evt.preventDefault();
  popup.classList.add("modal-size-show")
}

window.addEventListener("keydown", function(evt) {
  if(evt.keyCode === 27) {
    if(popup.classList.contains("modal-size-show")) {
      popup.classList.remove("modal-size-show");
    }
  }
})
