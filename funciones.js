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

  $(document).ready(function(){
    var ventana_ancho = $(window).width();
    if (ventana_ancho < 1024) {
        $(".productos-carrusel").slick({
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          });
    } 
    if (ventana_ancho > 1025) {
        $(".productos-carrusel").slick({
            arrows: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
          });
    } 
  });  


  
