buttonUp = document.querySelector('.button-up');

buttonUp.addEventListener('click', function () {
    window.location.href='#up';
})

let nav = document.querySelector('nav');
let oldScroll = 690;
window.addEventListener('scroll',() => {
    if (oldScroll < this.scrollY) {
        nav.classList.add('sticky-top');
        nav.classList.remove('sh-nav');
        nav.classList.add('sh-nav-sticky');
        console.log('ok')
    } else {
        nav.classList.add('sh-nav');
        nav.classList.remove('sh-nav-sticky');
        nav.classList.remove('sticky-top');
    }
});

