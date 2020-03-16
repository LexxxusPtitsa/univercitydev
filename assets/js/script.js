let programmNavLink = document.querySelectorAll('.programm__nav-li');
console.log(programmNavLink);

[].forEach.call(programmNavLink, function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        // console.log(e.target.tagName);
        if (e.target.tagName === 'A')
            document.querySelector('.programm__nav-link--active').classList.remove('programm__nav-link--active');
        document.querySelector('.programm__nav-li--active').classList.remove('programm__nav-li--active');
        document.querySelector('.programm__description-inner--active').classList.remove('programm__description-inner--active');
        item.classList.add('programm__nav-li--active');
        let id = e.target.href.split('#')[1];
        document.querySelector('#' + id).classList.add('programm__description-inner--active');
        e.target.classList.add('programm__nav-link--active');
    });
});


$(document).ready(function () {
    $('.slider_first').slick({
        infinite: true,
        dots: true,
        customPaging: function (slider, i) {
            console.log(slider, i)
            return '<span class="dot"></span>';
        },
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.prev-frst'),
        nextArrow: $('.next-frst'),
        autoplay: true,
        autoplaySpeed: 3000,
    });

    $('.slider_second').slick({
        infinite: true,
        dots: false,
        customPaging: function (slider, i) {
            console.log(slider, i)
            return '<span class="dot"></span>';
        },
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.prev-sec'),
        nextArrow: $('.next-sec'),
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
});

// window.addEventListener('scroll', myFunction());
// function myFunction() {
//   var elmnt = document.getElementByTagName('html');
//   var y = elmnt.scrollTop;
//   document.getElementById ("demo").innerHTML = "Horizontally: " + x + "px<br>Vertically: " + y + "px";
// }


let header = document.querySelector('.main__header');
let headerMail = document.querySelector('.main__header-mail');
let headerPhone = document.querySelector('.main__header-phone');
let headerUniver = document.querySelector('.main__header-univer');
let citySelect = document.querySelector('.main__header-city--top');
let citySelected = document.querySelectorAll('.city__selected');
let citySelectMob = document.querySelector('.main__header-city--bottom');
let logo = document.querySelector('.logo__text');
let nav = document.querySelector('.nav');
let navLinks = document.querySelector('.nav__links-inner');
let navButton = document.querySelector('.nav__button');
let cityList = document.querySelectorAll('.city__list');
let cityItem = document.querySelectorAll('.city__list-item');
let mFooterBut = document.querySelector('.mfooter__button');
let toggle = document.querySelector('.toggle');

toggle.addEventListener("click", function () {
    if (!document.querySelector('.main__header--active')) {
        header.classList.add('main__header--active');
        nav.classList.add('nav--active');
        window.scrollBy(0, 1);
    } else {
        header.classList.remove('main__header--active');
        nav.classList.remove('nav--active');
        window.scrollBy(0, 1);
        window.scrollBy(0, -2);
    }

});
citySelected.forEach(div => {
    div.addEventListener("click", function () {
        if (!document.querySelector('.city__list--active')) {
            cityList.forEach(list => {list.classList.add('city__list--active');})
            citySelected.forEach(item => {item.classList.add('city__selected--active');})
        } else {
            cityList.forEach(list => {list.classList.remove('city__list--active');})
            citySelected.forEach(item => {item.classList.remove('city__selected--active');})
        }
    })});


cityItem.forEach(div => {
    div.addEventListener("click", function (e) {
        // console.log(e.target.innerHTML);
        if (document.querySelector('.city__list-item--active')) {
            document.querySelectorAll('.city__list-item--active').forEach(item => {item.classList.remove('city__list-item--active');})
        // } else {
            e.target.classList.add('city__list-item--active');
            citySelected.forEach(list => {list.innerHTML = e.target.innerHTML})
            cityList.forEach(list => {list.classList.remove('city__list--active');})
            citySelected.forEach(item => {item.classList.remove('city__selected--active');})
        }
    })});

    mFooterBut.addEventListener("click", function (e) {
        if(!document.querySelector('.mfooter__button--active')){
            e.target.classList.add('mfooter__button--active');
            document.querySelector('.mfooter__messengers').classList.add('mfooter__messengers--active');
        }else{
            e.target.classList.remove('mfooter__button--active');
            document.querySelector('.mfooter__messengers').classList.remove('mfooter__messengers--active');
        }
    })


document.querySelector('.city__close').addEventListener('click', function () {
    if (document.querySelector('.city__list--active')) {
        cityList.forEach(list => {list.classList.remove('city__list--active');})
    }
})

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > 0) {
        header.style.cssText = "background-color: #fff; color: #000;";
        toggle.classList.add('toggle--scroll');
        headerMail.classList.add('main__header-mail--scroll');
        headerPhone.classList.add('main__header-phone--scroll');
        headerUniver.classList.add('main__header-univer--scroll');
        citySelect.classList.add('main__header-city--top--scroll');
        citySelectMob.classList.add('main__header-city--bottom--scroll');
        logo.classList.add('logo__text--scroll');
        navLinks.classList.add('nav__links-inner--scroll');
        navButton.classList.add('nav__button--scroll');
    } else {
        if (!document.querySelector('.main__header--active') && !document.querySelector('.main__header--active')) {
            header.style.cssText = "background-color: unset;";
            toggle.classList.remove('toggle--scroll');
        headerMail.classList.remove('main__header-mail--scroll');
        headerPhone.classList.remove('main__header-phone--scroll');
        headerUniver.classList.remove('main__header-univer--scroll');
        citySelect.classList.remove('main__header-city--top--scroll');
        citySelectMob.classList.remove('main__header-city--bottom--scroll');
        logo.classList.remove('logo__text--scroll');
        navLinks.classList.remove('nav__links-inner--scroll');
        navButton.classList.remove('nav__button--scroll');
        }
        

    }

    if (st > lastScrollTop) {
        header.classList.add('main__header--scroll');
    } else {
        header.classList.remove('main__header--scroll');
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);