const form = document.querySelector('.form');
const buttons = document.querySelectorAll('.rating_sign_input');



buttons.forEach(radio => {
    radio.addEventListener('change', function () {
        const checkedNumber = document.querySelector('.rating_sign_input:checked').value || undefined;

        buttons.forEach(item => {
            const currentLabel = item.previousElementSibling;
            if (item.value <= checkedNumber) {
                currentLabel.classList.add('check');
            } else { currentLabel.classList.remove('check'); }
        });

    });
});
