$(document).ready(function () {
  // Efek scroll halaman
  $(".page-scroll").on("click", function (e) {
    e.preventDefault();
    var tujuan = $(this).attr("href");
    var elemenTujuan = $(tujuan);

    // Check if element exists before scrolling
    if (elemenTujuan.length) {
      $("html, body").animate(
        {
          scrollTop: elemenTujuan.offset().top - 50,
        },
        1250,
        "swing" // Gunakan "swing" jika tidak ada plugin easing
      );
    } else {
      console.error("Target element not found: " + tujuan);
    }
  });

  // Efek paralaks untuk jumbotron
  $(window).on("scroll", function () {
    var scrollPos = $(this).scrollTop();

    // Efek paralaks pada jumbotron
    $(".jumbotron h1").css({
      transform: "translate(0px, " + scrollPos / 2 + "%)",
    });
    $(".jumbotron img").css({
      transform: "translate(0px, " + scrollPos / 2 + "%)",
    });
    $(".jumbotron h2").css({
      transform: "translate(0px, " + scrollPos / 3 + "%)",
    });

    // Efek muncul untuk Dokumentasi
    if (
      $(".Dokumentasi").length > 0 &&
      scrollPos > $(".Dokumentasi").offset().top - 250
    ) {
      $(".Dokumentasi .thumbnail").each(function (i) {
        setTimeout(function () {
          $(".Dokumentasi .thumbnail").eq(i).addClass("muncul");
        }, 300 * (i + 1));
      });
    }
  });
  document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll(".fade-in");

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 50) {
        section.classList.add("active");
      }
    });
  });
});
