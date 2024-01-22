/* wathc */

document.addEventListener('DOMContentLoaded', function () {
    const endDate = new Date('2024-01-25T23:59:59').getTime();
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

    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.addEventListener ('click', function () {
        this.classList.toggle('active');
    })

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
          (child) => child.classList.remove('tabs-header__item--active')
      );

      document.querySelectorAll('.tabs-body__block').forEach(
          (child) => child.classList.remove('tabs-body__block--active')
      );

      item.classList.add('tabs-header__item--active');
      document.getElementById(id).classList.add('tabs-body__block--active'); 
  })
);

document.querySelector('.tabs-header__item').click();

/*sellers*/

function toggleClass() {
    const targetElement = document.querySelector('.sellers-body__element_click');
    const currentClass = targetElement.classList.contains('sellers-body__active') ? 'sellers-body__active' : 'sellers-body__overflow-hidden';
    targetElement.classList.remove(currentClass);
    targetElement.classList.add(currentClass === 'sellers-body__active' ? 'sellers-body__overflow-hidden' : 'sellers-body__active');
};