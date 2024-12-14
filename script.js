var swiper = new Swiper(".doctors", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: true,
    loop: true,
  });

//counter

$(document).ready(function(){
    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).data('count')
        }, {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

//form
(function() {
  'use strict';
  window.addEventListener('load', function() {
      var form = document.getElementById('contactForm');
      form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              form.classList.add('was-validated');
          } else {
              event.preventDefault();
              document.querySelector('.success-message').style.display = 'block';
              form.reset();
              form.classList.remove('was-validated');
          }
          
      }, false);
  }, false);
})();
//form2
(function() {
  'use strict';
  window.addEventListener('load', function() {
      var form = document.getElementById('contactFormm');
      form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
              form.classList.add('was-validated');
          } else {
              event.preventDefault();
              document.querySelector('.success-messages').style.display = 'block';
              form.reset();
              form.classList.remove('was-validated');
          }
          
      }, false);
  }, false);
})();