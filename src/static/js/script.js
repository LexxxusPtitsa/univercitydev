let programmNavLink = document.querySelectorAll('.programm__nav-li');
console.log(programmNavLink);

[].forEach.call(programmNavLink, function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        // console.log(e.target.tagName);
        if(e.target.tagName === 'A')
        document.querySelector('.programm__nav-link--active').classList.remove('programm__nav-link--active');
        document.querySelector('.programm__nav-li--active').classList.remove('programm__nav-li--active');
        document.querySelector('.programm__description-inner--active').classList.remove('programm__description-inner--active');
        item.classList.add('programm__nav-li--active');
        let id = e.target.href.split('#')[1];
        document.querySelector('#'+id).classList.add('programm__description-inner--active');
        e.target.classList.add('programm__nav-link--active');
    });
  });