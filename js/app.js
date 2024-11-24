// smooth scroll to anchors
$(document).ready(function() {

  // Add scrollspy to <body>
  $('body').scrollspy({
    target: ".navbar",
    offset: 50
  });

  // Add smooth scrolling on all links inside the navbar
  $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });

});

//navbar change background on scroll
$(window).scroll(function() {
  if($(this).scrollTop() > 50)  /*height in pixels when the navbar becomes non opaque*/
  {
      $('.opaque-navbar').addClass('opaque');
  } else {
      $('.opaque-navbar').removeClass('opaque');
  }
});


// Back to top button
 if ($('#back-to-top').length) {
     var scrollTrigger = 100, // px
         backToTop = function () {
             var scrollTop = $(window).scrollTop();
             if (scrollTop > scrollTrigger) {
                 $('#back-to-top').addClass('show');
             } else {
                 $('#back-to-top').removeClass('show');
             }
         };
     backToTop();
     $(window).on('scroll', function () {
         backToTop();
     });
     $('#back-to-top').on('click', function (e) {
         e.preventDefault();
         $('html,body').animate({
             scrollTop: 0
         }, 700);
     });
 }


 //PARALLAX STARS
 document.addEventListener('DOMContentLoaded', function() {
  function generateStars(count) {
    let stars = [];
    for(let i = 0; i < count; i++) {
        let x = Math.floor(Math.random() * 2000);
        let y = Math.floor(Math.random() * 2000);
        stars.push(`${x}px ${y}px #FFF`);
    }
    return stars.join(', ');
  }
  
  // Generate box-shadow values for each star class
  const smallStars = generateStars(1500);  // More small stars
  const mediumStars = generateStars(400);  // More medium stars
  const bigStars = generateStars(200);     // More big stars
  
  // Apply the generated values to the CSS
  document.getElementById('stars').style.boxShadow = smallStars;
  document.getElementById('stars2').style.boxShadow = mediumStars;
  document.getElementById('stars3').style.boxShadow = bigStars;
  
  // Also apply to the :after pseudo-elements (needs to be done via CSS)
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    #stars:after { box-shadow: ${smallStars}; }
    #stars2:after { box-shadow: ${mediumStars}; }
    #stars3:after { box-shadow: ${bigStars}; }
  `;
  document.head.appendChild(styleSheet);
});
