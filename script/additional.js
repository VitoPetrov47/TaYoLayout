/*INPUT KEYWORD*/
const panel = document.getElementById("keywords-panel");
const input = document.getElementById("keywords-input");
const keywords = [];

// функция для добавления ключевых слов в массив и обновления панели
function addKeyword(keyword) {
    keywords.push(keyword);
    updatePanel();
}

// функция для удаления ключевых слов из массива и обновления панели
function removeKeyword(index) {
    keywords.splice(index, 1);
    updatePanel();
}

// функция для обновления панели
function updatePanel() {
// очищаем панель
    panel.innerHTML = "";
// добавляем каждое ключевое слово в панель
    keywords.forEach((keyword, index) => {
// создаем элемент
        const keywordElement = document.createElement("div");
        keywordElement.classList.add("keyword");
// добавляем текст
        keywordElement.innerText = keyword;
// добавляем кнопку для удаления элемента
        const removeButton = document.createElement("button");
        removeButton.innerHTML = `
           <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L8.99998 8.99998" stroke="#636363" stroke-linecap="round"/>
                <path d="M9 1L1.00002 8.99998" stroke="#636363" stroke-linecap="round"/>
            </svg>
        `;
        removeButton.addEventListener("click", () => removeKeyword(index));
        keywordElement.appendChild(removeButton);
// добавляем элемент в панель
        panel.appendChild(keywordElement);
    });
// добавляем input в конец панели
    panel.appendChild(input);
}

// добавляем обработчик событий для input
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && input.value.trim() !== "") {
        console.log('keywords: ', keywords.length);
        if (keywords.length < 5) {
            addKeyword(input.value.trim());
            input.value = "";
        } else if (keywords.length >= 5) {
            input.style.display="none";
        }

        // if (keywords.length > 4) {
        //     // alert("Вы достигли лимита!");
        //     input.style.display="none";
        // } else {
        //     addKeyword(input.value.trim());
        //     input.style.display="flex";
        //     input.value = "";
        // }
    }
});

// обновляем панель при загрузке страницы
updatePanel();


/*CUSTOM SELECT*/
const selectAdd = document.querySelector('.custom-select-addition');
const selectedOptionBtnAdd = selectAdd.querySelector('.selected-option-btn-addition');
const optionBtnsAdd = selectAdd.querySelectorAll('.option-btn-addition');

selectedOptionBtnAdd.addEventListener('click', function() {
    const optionsList = this.parentElement.nextElementSibling;
    if (optionsList.style.display === 'block') {
        optionsList.style.display = 'none';
        selectedOptionBtnAdd.style.borderRadius = '6px 6px 6px 6px';
    } else {
        optionsList.style.display = 'block';
        selectedOptionBtnAdd.style.borderRadius = '6px 6px 0 0';
    }
});

optionBtnsAdd.forEach(function(optionBtn) {
    optionBtn.addEventListener('click', function() {
<<<<<<< HEAD
        const selectedOptionText = this.textContent;
        selectedOptionBtnAdd.textContent = selectedOptionText;
        selectedOptionBtnAdd.style.borderRadius = '6px 6px 6px 6px';
        optionBtnsAdd.forEach(function(btn) {
            btn.classList.remove('active');
        });
        this.classList.add('active');
        const optionsList = this.parentElement;
        optionsList.style.display = 'none';
    });
});
=======

        // console.log('optionBtn: ', optionBtn);
        let label = optionBtn.querySelector('label');
        let labelContent = label.textContent;

        let imgChecked = optionBtn.querySelector('.option-btn-addition-checkmark');

        // console.log('Label content:', labelContent);

        setSelected(labelContent, true, imgChecked);
        const optionsList = this.parentElement;
        optionsList.style.display = 'none';
    });
});

function setSelected(name, selected, imgChecked) {
    let selectedCategory = document.querySelector('.additional-selected-category');

    if(!document.getElementById(`${name}`)) {
        let selectedContent = `
         <div id="${name}" class="additional-selected-category-block">
            <label>${name}</label>
            <button id="btnCategory${name}">
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.00244 1L15.0024 15" stroke="#636363" stroke-width="1.6" stroke-linecap="round"/>
                    <path d="M15.002 1L1.00198 15" stroke="#636363" stroke-width="1.6" stroke-linecap="round"/>
                </svg>
            </button>
        </div>
    `;
        selectedCategory.insertAdjacentHTML('beforeend', selectedContent);

        imgChecked.style.display = 'block';

        let btnCategoryDelete = document.getElementById(`btnCategory${name}`)
        let selectedCategoryById = document.getElementById(`${name}`)
        btnCategoryDelete.addEventListener('click', () => {
            selectedCategoryById.remove();
            imgChecked.style.display = 'none';
        });
    }

    // let selectedCategoryBlock = selectedCategory.querySelector('.additional-selected-category-block');
    // let selectedCategoriesContent = selectedCategoryBlock.querySelector('label');
    //
    // if(selectedCategoriesContent.textContent === name) {
    //     imgChecked.style.display = 'block';
    // } else {
    //     imgChecked.style.display = 'none';
    // }
}
>>>>>>> parent of 5fcd3bd (TaYoLayout commit)
