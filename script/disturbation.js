const selectButtons = document.querySelectorAll('.main-distribution-select-button');
const assignButtons = document.querySelectorAll('.main-distribution-assign-button');

selectButtons.forEach(button => {
    button.addEventListener('click', () => {
        // remove selected class from all buttons
        selectButtons.forEach(btn => {
            btn.classList.remove('selected');
        });

        // add selected class to clicked button
        button.classList.add('selected');
    });
});

assignButtons.forEach(button => {
    button.addEventListener('click', () => {
        // remove selected class from all buttons
        assignButtons.forEach(btn => {
            btn.classList.remove('selected');
        });

        // add selected class to clicked button
        button.classList.add('selected');
    });
});
