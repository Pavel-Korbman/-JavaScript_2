// Прерывание событий

// .stopPropagation() предотвращает распространение события по DOM-дереву и блокирует его обработку на родительских или дочерних элементах. Это действие ограничено пределами одного элемента.

// .stopImmediatePropagation() - если несколько обработчиков прикреплены к одному и тому же элементу
// с одинаковым типом события, они вызываются в порядке своего добавления. 
// Если один из этих обработчиков вызовет .stopImmediatePropagation(), то события оставшихся
// обработчиков вызваны не будут.


const form = document.querySelector('.form');
const list = document.querySelector('.menu');

list.addEventListener('click', (e) => {
    console.log('В первом UL в фазе захвата');
    const propagationControlMethodName = form.elements['propagation-control'].value;
    console.log(propagationControlMethodName);
    if (propagationControlMethodName) {
        e[propagationControlMethodName]()
    }
}, true)

list.addEventListener('click', () => {
    console.log('Во втором UL в фазе захвата')
}, true);

list.addEventListener('click', () => {
    console.log('В первом UL в фазе всплытия')
});

Array.from(list.children).forEach((child) => {
    child.addEventListener('click', () => {
        console.log('В каждом LI в фазе всплытия');
    })
});

// Действия по умолчанию и отменяемые события

// .preventDefault() - отменяет действие по умолчанию (например переход по ссылке)



const checkbox = document.querySelector('.check');
//const formEl = document.querySelector('.newForm');
const submitEl = document.querySelector('.submit');
const errorEl = document.querySelector('.error');
// checkbox.addEventListener('click', (e) => {
//     console.log(e.target.value);  // on - всегда
//     console.log(e.target.checked); // true  false  
// });

submitEl.addEventListener('click', function (e) {
    if(checkbox.checked) {
        console.log('Согласие');        
    } else {  
        e.preventDefault();
        errorEl.textContent = 'Необходимо согласиться';
    }});

checkbox.addEventListener('click', (e) => {
    const target = e.target;
    if(target.checked){errorEl.textContent = ''; }; // убирам 'Необходимо согласиться'   
});


