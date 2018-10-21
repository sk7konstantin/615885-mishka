var button = document.querySelector(".product__button");
var popup = document.querySelector(".modal-size");

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
