let html = document.documentElement;
let button = document.querySelector('.content__button button');
let record_btn = document.querySelector('.record-btn');
let submit_form = document.querySelector('.modal__button button');
let modal = document.querySelector('.main-modal');
let successfully = document.querySelector('.successfully');
let close = document.querySelector('.modal__close');
let successfully_close = document.querySelector('.successfully-close');

// Parallax
window.onload = function () {
    var wrapper = document.querySelector('.intro'),
        layerOne = document.querySelector('.layer-1'),
        layerTwo = document.querySelector('.layer-2');

    wrapper.addEventListener('mousemove', function (e) {
        var pageX = e.clientX - window.innerWidth / 2,
            pageY = e.clientY - window.innerHeight / 2;
        layerOne.style.transform = 'translateX(-' + (4 + pageX / 70) + '%) translateY(-' + (4 + pageY / 70) + '%)';
        layerTwo.style.transform = 'translateY(-' + (4 + pageX / 70) + '%)';
    });
}

// Modal window
button.addEventListener('click', function () {
    modal.setAttribute("style", "visibility: visible;");
    html.classList.add('overlay');
    html.setAttribute("style", "overflow: hidden;");
});
record_btn.addEventListener('click', function () {
    modal.setAttribute("style", "visibility: visible;");
    html.classList.add('overlay');
    html.setAttribute("style", "overflow: hidden;");
});
submit_form.addEventListener('click', function (e) {
    e.preventDefault();
    successfully.setAttribute("style", "visibility: visible;");
    html.classList.add('overlay');
    html.setAttribute("style", "overflow: hidden;");
    modal.setAttribute("style", "visibility: hidden;");
});

close.addEventListener('click', function () {
    modal.setAttribute("style", "visibility: hidden;");
    html.classList.remove('overlay');
    html.setAttribute("style", "overflow-x: hidden;");
});
successfully_close.addEventListener('click', function () {
    successfully.setAttribute("style", "visibility: hidden;");
    html.classList.remove('overlay');
    html.setAttribute("style", "overflow-x: hidden;");
});