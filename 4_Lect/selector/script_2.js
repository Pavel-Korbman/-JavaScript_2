const formEl = document.querySelector('.form');
const selectEl = formEl.querySelector('.select');
const buttonEl = formEl.querySelector('.button');
const selectError = formEl.querySelector('.select__error');

// buttonEl.addEventListener('click', function (e) {
//     console.log(selectEl.value);
//     e.preventDefault(); // останавливаем 
// });



buttonEl.addEventListener('click', function (e) {
    if (selectEl.value === 'city') {        
        selectError.textContent = 'Нужно выбрать город!';
        selectEl.classList.add('select__red');
        e.preventDefault();
    } else {
        formEl.action = `${selectEl.value.toLowerCase()}.html`;
    }
});

selectEl.addEventListener('click', function (e) {
    if (selectEl.value !== 'city') {     
        selectError.textContent = '';       
    } 
});