const form = document.querySelector('.form');
const lightBulb = document.querySelector('.light-bulb');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  lightBulb.classList.add('animate');
  setTimeout(function() {
    form.reset();
    lightBulb.classList.remove('animate');
  }, 2000);
});
