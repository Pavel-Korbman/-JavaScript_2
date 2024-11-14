const form = document.querySelector('.form');
const buttons = form.querySelectorAll('.rating_sign_input');
const ratingVal = form.querySelector('.rating_value');

buttons.forEach(radio => {
    radio.addEventListener('change', function () {
        const checkedNumber = document.querySelector('.rating_sign_input:checked').value || undefined;
        //console.log(`Рейтинг: ${checkedNumber}`);
        ratingVal.textContent = checkedNumber;
        buttons.forEach(item => {
            const currentLabel = item.previousElementSibling;
            if (item.value <= checkedNumber) {
                currentLabel.classList.add('check');
            } else { currentLabel.classList.remove('check'); }
        });
    });
});
