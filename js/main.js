/* wathc */

document.addEventListener('DOMContentLoaded', function () {
    const endDate = new Date('2024-01-31T23:59:59').getTime();
    const timerInterval = setInterval(updateTimers, 1000);

    function updateTimers() {
        const currentDate = new Date().getTime();
        let timeLeft = endDate - currentDate;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // оновлення таймерів для всіх слайдів
            updateAllSlideTimers(0, 0, 0);
        } else {
            const hours = Math.floor(timeLeft / (1000 * 60 * 60));
            timeLeft -= hours * (1000 * 60 * 60);

            const minutes = Math.floor(timeLeft / (1000 * 60));
            timeLeft -= minutes * (1000 * 60);

            const seconds = Math.floor(timeLeft / 1000);

            // оновлення таймерів для всіх слайдів
            updateAllSlideTimers(hours, minutes, seconds);
        }
    }

    function updateAllSlideTimers(hours, minutes, seconds) {
        const slides = document.querySelectorAll('.swiper-slide');
        slides.forEach(slide => {
            const timerElement = slide.querySelector('.swiper-body__wathc-clockface');
            if (timerElement) {
                timerElement.innerHTML = `
                    <div class="swiper-body__wathc-hours">${formatTime(hours)}</div>
                    <div class="swiper-body__wathc-minutes">${formatTime(minutes)}</div>
                    <div class="swiper-body__wathc-seconds">${formatTime(seconds)}</div>
                `;
            }
        });
    }

    function formatTime(time) {
        return time < 10 ? '0' + time : time;
    }
});

/*burger-menu*/

    let burgerMenu = document.querySelector('.burger-menu');
    let burgerMenuBackground = document.querySelector('.burger-menu__background');
    let burgerItem = document.querySelector('.burger-menu__body-background');
    let look = document.body;

    burgerMenu.addEventListener('click', function(){
        burgerMenu.classList.toggle('burger-menu_active');
        burgerMenuBackground.classList.toggle('burger-menu__background_active');
        burgerItem.classList.toggle('burger-menu__body-background_active');
        look.classList.toggle('look');
    });

/*main-swiper*/

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 36,
    loop: true,
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper_clikc',
    },
  }
);

/*tabs*/

document.querySelectorAll('.tabs-header__item').forEach((item) =>
  item.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '');

      document.querySelectorAll('.tabs-header__item').forEach(
          (child) => child.classList.remove('tabs-header__item_active')
      );

      document.querySelectorAll('.tabs-body__block').forEach(
          (child) => child.classList.remove('tabs-body__block_active')
      );

      item.classList.add('tabs-header__item_active');
      document.getElementById(id).classList.add('tabs-body__block_active'); 
  })
);

document.querySelector('.tabs-header__item').click();

/*sellers*/

 function addClickHeight() {
    let addHeight = document.querySelector('.sellers-body__overflow-hidden');
    addHeight.classList.toggle('sellers-body_active');
 };

// Footer

document.querySelectorAll('.footer-menu__titel-section').forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const parent = item.parentNode;
        const arrow = item.querySelectorAll('.footer-menu__arrow-menu');

        if (parent.classList.contains('footer-menu__colum_active')){
            parent.classList.remove('footer-menu__colum_active');
            arrow.forEach((arrowItem) => {
                arrowItem.classList.remove('footer-menu__arrow-menu_active');
            });
        } else {
            document
                .querySelectorAll('.footer-menu__colum')
                .forEach((child) => {
                    child.classList.remove('footer-menu__colum_active');
                });
                    
            document
                .querySelectorAll('.footer-menu__arrow-menu')
                .forEach((arrowItem) => {
                    arrowItem.classList.remove('footer-menu__arrow-menu_active');
                });
       
            parent.classList.add('footer-menu__colum_active');
            arrow.forEach((arrowItem) => {
                arrowItem.classList.add('footer-menu__arrow-menu_active');
            });
        } 
    });
});