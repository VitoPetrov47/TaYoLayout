/*modal window*/
const btnReviewInterior = document.getElementById('showModalReviewInterior');
const modalOverlayInterior = document.querySelector('.modal-interior-overlay');
const modalInterior = document.querySelector('.modal-interior');

const btnReviewCover = document.getElementById('showModalReviewCover');
const modalOverlayCover = document.querySelector('.modal-cover-overlay');
const modalCover = document.querySelector('.modal-cover');

/*interior*/
btnReviewInterior.addEventListener('click', () => {
    modalInterior.classList.add('modal-interior--visible')
    modalOverlayInterior.classList.add('modal-interior-overlay--visible');
})

modalOverlayInterior.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target == modalOverlayInterior) {
        modalInterior.classList.remove('modal-interior--visible');
        modalOverlayInterior.classList.remove('modal-interior-overlay--visible');
    }
});

/*cover*/
btnReviewCover.addEventListener('click', () => {
    modalCover.classList.add('modal-cover--visible')
    modalOverlayCover.classList.add('modal-cover-overlay--visible');
})

modalOverlayCover.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target == modalOverlayCover) {
        modalCover.classList.remove('modal-cover--visible');
        modalOverlayCover.classList.remove('modal-cover-overlay--visible');
    }
});