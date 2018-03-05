$(function() {
  //ScrollReveal
  window.sr = ScrollReveal();
  sr.reveal(".project", { duration: 500, viewFactor: 0.3 });
  sr.reveal(".content-img", { duration: 500, viewFactor: 0.2 });
  sr.reveal(".content-half-half", { duration: 500, viewFactor: 0.2 });

  // ===== Scroll to Top ====
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
      // If page is scrolled more than 50px
      $("#return-to-top").fadeIn(200); // Fade in the arrow
    } else {
      $("#return-to-top").fadeOut(200); // Else fade out the arrow
    }
  });
  $("#return-to-top").click(function() {
    // When arrow is clicked
    $("body,html").animate(
      {
        scrollTop: 0 // Scroll to top of body
      },
      500
    );
  });
});
