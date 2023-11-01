const PublishCustomMenu = document.getElementById('publishBook');
const subPublishMenu = document.querySelector('.sub-publish-menu');
let arrow = document.querySelector('.side-nav-arrow');
let checked = document.querySelector('.side-nav-info-info-checked');

PublishCustomMenu.addEventListener('click', (event) => {
    event.preventDefault();
    if(subPublishMenu.classList.contains('open')) {
        subPublishMenu.classList.remove('open');
        arrow.classList.remove('open')
    } else {
        subPublishMenu.classList.add('open');
        arrow.classList.add('open')
    }
});

let a = 1;

if(a === 1) {
    checked.classList.add('open')
} else if (a === 0) {
    checked.classList.remove('open')
}