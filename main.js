const swiper = new Swiper('.swiper', {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = ()=> {
  menu.classList.toggle('bx-x')
  navbar.classList.toggle('active')
}
window.onscroll = () =>{
  menu.classList.remove('bx.x');
  navbar.classList.remove('active');
}
