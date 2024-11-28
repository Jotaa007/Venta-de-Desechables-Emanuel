const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{
    if (window.pageYOffset >100 ){
        toTop.classList.add("active")
    } else {
        toTop.classList.remove("active");
    }
    
})

// Asegúrate de que el script de Swiper esté incluido en tu HTML antes de este script

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.card-wrapper', {
      loop: true,
      spaceBetween: 30,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Habilitar clic en los puntos de paginación
        dynamicBullets: true
      },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        0:{
          slidesPerView: 1
        },
        768:{
          slidesPerView: 2
        },
        1024:{
          slidesPerView: 3
        },
      }
  });
});

