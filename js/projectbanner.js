$(document).ready(function() {
  //Set defaults for nav
  $("#closeNav").hide();
  $("#navList").hide();


  //Open nav and change icon
  $("#openNav").click(function() {
    $("body").addClass("fixed-position");
    $("#openNav").hide();
    $("#closeNav").show();
    $("#navMain").css("height","100%");
    $("#navList").fadeIn(400);
  });

  //Clicking a link closes the nav
  $(".navLink").click(function() {
    $("body").removeClass("fixed-position");
    $("#navList").fadeOut(100);
    $("#navMain").css("height","68px");
    $("#closeNav").hide();
    $("#openNav").show();
  });

  //Close nav and change icon
  $("#closeNav").click(function() {
    $('body').removeClass("fixed-position");
    $("#navList").fadeOut(100);
    $("#navMain").css("height","68px");
    $("#closeNav").hide();
    $("#openNav").show();
  });

  //Show nav after scrolling
  var menu = $("#navMain");
  menu.css({top: '-68px'});
  $(window).scroll(function(){
    if($(window).scrollTop() >= 400 ){
        menu.css({top: '0px'});
    } else {
      menu.css({top: '-68px'});

    }
  });


  //V2
    const elements = document.querySelectorAll('.section');
    const resultElement = document.getElementById('projectLabel');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const visibleElementId = entry.target.getAttribute('data-id');
                resultElement.textContent = `${visibleElementId}`;
            }
        });
    });

    elements.forEach((section) => {
        observer.observe(section);
    });

});