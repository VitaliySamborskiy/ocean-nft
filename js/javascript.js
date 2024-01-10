/* wathc */

document.addEventListener('DOMContentLoaded', function() {
    const endDate = new Date('2024-01-10T23:59:59').getTime();
    const timerInterval = setInterval(updateTimer, 1000);
    function updateTimer () {
        const currentDate = new Date().getTime();
        const timeLeft = endDate - currentDate;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById('countdown').innerHTML = '00 00 00';
        } else {
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
            document.getElementById('hours').innerHTML = formatTime(hours);
            document.getElementById('minutes').innerHTML = formatTime(minutes);
            document.getElementById('seconds').innerHTML = formatTime(seconds);
            console.log(hours, minutes, seconds);
        }
    }
    function formatTime(time) {
        return time < 10 ? '0' + time : time;        
    }
});

/*burger-menu*/

document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    burgerMenu.addEventListener ('click', function () {
        this.classList.toggle('active');
        console.log('click')
    }) 
})

/*main-swiper*/
/*
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    slidesPerView: 1, 
    spaceBetween: 0,
            autoplay: {
                delay: 10000, 
                disableOnInteraction: false,
            }, 
});*/