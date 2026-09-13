// header scroll to change color and steak above 
document.addEventListener("DOMContentLoaded", function () {
  const siteHeader = document.getElementById("siteHeader");
  if (siteHeader) {
    function handleScroll() {
      if (window.scrollY > 30) {
        siteHeader.classList.add("scrolled");
      } else {
        siteHeader.classList.remove("scrolled");
      }
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
  }
// blog მეილის ნაწილი
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const emailInput = document.getElementById('newsletterEmail');
      const emailValue = emailInput.value.trim();

      if (!emailValue.includes('@')) {
        emailInput.classList.add('is-invalid');
      } else {
        emailInput.classList.remove('is-invalid');
        alert('Subscribed successfully!');
        emailInput.value = '';
      }
    });
  }

});

// 3. Owl Carousel Initializations

$(document).ready(function() {
  
  // Testimonials Slider (index.html)
  if ($('.testimonial-slider').length) {
    $('.testimonial-slider').owlCarousel({
      items: 1,
      loop: true,
      margin: 0,
      nav: false,
      dots: true,
      autoplay: false,
      smartSpeed: 500
    });
  }

  // Case Studies Carousel (index.html, team.html)
  if ($('.case-studies-carousel').length) {
    $('.case-studies-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      dots: false,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
      }
    });
  }

  // Awards Carousel (index.html, about.html)
  if ($('#awards-carousel').length) {
    $('#awards-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: { items: 2 },
        600: { items: 4 },
        1000: { items: 5 }
      }
    });
  }

});