$(function () {
  $(".o-y-why-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".o-y-gallery-list-left",
    nextArrow: ".o-y-gallery-list-right",
  });
});
