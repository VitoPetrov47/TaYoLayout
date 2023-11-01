let successFormat = document.querySelector('.main-manuscript-upload-format-success');
let successCover = document.querySelector('.main-manuscript-upload-cover-success');
let failedFormat = document.querySelector('.main-manuscript-upload-format-failed');
let failedCover = document.querySelector('.main-manuscript-upload-cover-failed');

let converting = document.querySelector('.manuscript-converting-block');

successFormat.style.display = 'none';
failedFormat.style.display = 'none';

successCover.style.display = 'none';
failedCover.style.display = 'none';

converting.style.display = 'none';

/*modal window*/
// const btns = document.querySelectorAll('.btn');
const btnPreview = document.getElementById('manuscriptPreviewBookButton');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');

btnPreview.addEventListener('click', (e) => {
    let path = e.currentTarget.getAttribute('data-path');
    document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
    modalOverlay.classList.add('modal-overlay--visible');
})

modalOverlay.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
    }
});
