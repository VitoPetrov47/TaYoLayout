const bookTypeButtons = document.querySelectorAll('.main-info-book-type-btn');
const bookLanguageButtons = document.querySelectorAll('.main-info-book-language-btn');
const bookGenreButtons = document.querySelectorAll('.main-info-book-genre-btn');

bookTypeButtons.forEach(button => {
    button.addEventListener('click', () => {
        // remove selected class from all buttons
        bookTypeButtons.forEach(btn => {
            btn.classList.remove('selected');
        });

        // add selected class to clicked button
        button.classList.add('selected');
    });
});

bookLanguageButtons.forEach(button => {
    button.addEventListener('click', () => {
        // remove selected class from all buttons
        bookLanguageButtons.forEach(btn => {
            btn.classList.remove('selected');
        });

        // add selected class to clicked button
        button.classList.add('selected');
    });
});

bookGenreButtons.forEach(button => {
    button.addEventListener('click', () => {
        // remove selected class from all buttons
        bookGenreButtons.forEach(btn => {
            btn.classList.remove('selected');
        });

        // add selected class to clicked button
        button.classList.add('selected');
    });
});