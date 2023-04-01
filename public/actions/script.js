// collepse effect
$(".js-scroll-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

// AOS effect
AOS.init({
  offset: 120,
  duration: 700,
  easing: "ease",
});
