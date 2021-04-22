$(document).ready(function() {
    $('.banner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });

    $(".icono-hamburger").click(function(){
        $(".contenido-oculto").fadeIn();
    });

    $(".cerrar").click(function(){
        $(".contenido-oculto").fadeOut();
    })

  });

  d = $(document);
  d.ready(iniciar);
  function iniciar() {
      b = $(".enviar");
      b.click(mensaje);
  }
  function mensaje() {
      y = $("#nombre").val();
      x = $("#email").val();
      alert(y);
      alert(x);
  }


