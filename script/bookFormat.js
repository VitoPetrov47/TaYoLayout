const bookSizeButtons = document.querySelectorAll('.book-format-book-size-btn');
const bookInteriorButtons = document.querySelectorAll('.book-format-book-interior-btn');
const paperTypeButtons = document.querySelectorAll('.book-format-paper-type-btn');

bookSizeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // remove selected class from all buttons
        bookSizeButtons.forEach(btn => {
            btn.classList.remove('selected');
        });

        // add selected class to clicked button
        button.classList.add('selected');
    });
});

bookInteriorButtons.forEach(button => {
    button.addEventListener('click', () => {
        // remove selected class from all buttons
        bookInteriorButtons.forEach(btn => {
            btn.classList.remove('selected');
        });

        // add selected class to clicked button
        button.classList.add('selected');
    });
});

paperTypeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // remove selected class from all buttons
        paperTypeButtons.forEach(btn => {
            btn.classList.remove('selected');
        });

        // add selected class to clicked button
        button.classList.add('selected');
    });
});