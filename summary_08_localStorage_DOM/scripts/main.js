/*
1. Верстка формы обратной связи. От нас требуется с помощью JS (методами работы с DOM), создать и добавить на страницу форму обратной связи. Предполагается, что форма имеет следующие поля:
   - фамилия
   - имя
   - емейл
   - телефон
   - кнопка "Отправить"
   - кнопка "Отмена"
   */

const formEl = document.createElement('form');

const lastNameInputEl = document.createElement('input');
lastNameInputEl.placeholder = 'Last Name';
lastNameInputEl.id = 'lastName';

const firstNameInputEl = document.createElement('input');
firstNameInputEl.placeholder = 'First Name';
firstNameInputEl.id = 'firstName';

const emailInputEl = document.createElement('input');
emailInputEl.placeholder = 'Email';
emailInputEl.type = 'email';
emailInputEl.id = 'email';

const phoneInputEl = document.createElement('input');
phoneInputEl.placeholder = 'Phone';
phoneInputEl.type = 'tel';
phoneInputEl.id = 'phone';

const btnSend = document.createElement('button');
btnSend.textContent = 'Send';
const btnCancel = document.createElement('button');
btnCancel.textContent = 'Cancel';

formEl.append(lastNameInputEl, firstNameInputEl, emailInputEl, phoneInputEl, btnSend, btnCancel);

const mainContainer = document.querySelector('.mainContainer');
mainContainer.append(formEl);


/*
3. Обеспечение сохранения данных полей формы при обновлении страницы, и заполнение значениями при показе формы. Здесь суть задачи в том, что нужно обеспечить сохранение в ЛС данных ВСЕХ инпутов (то есть, динамически пройтись по всем инпутам на странице, и сохранить в ЛС). Перед решением задачи, обсуждаем пути решения.
*/

const saveInputValueHandler = (event) => {
    localStorage.setItem(event.target.id, event.target.value);
}

const inputs = document.querySelectorAll('input');
inputs.forEach( input => {
    input.addEventListener('blur', saveInputValueHandler);
});

document.addEventListener('DOMContentLoaded', () => {
    inputs.forEach( input => {
        const inputId = input.id;
        if (inputId) {
            const savedValue = localStorage.getItem(inputId);
            if (savedValue) {
                input.value = savedValue;
            }
        }
    });
});



// const startsFromDigit = /^\d/;
// const str = 'timon123';
// const str2 = '1pumba';
// console.log(startsFromDigit.test(str)); // false
// console.log(startsFromDigit.test(str2)); // true
// const endsByLetterOrDigit = /\w$/;
// const str3 = 'timon123';
// const str4 = '1pumba ';
// console.log(endsByLetterOrDigit.test(str3)); // true
// console.log(endsByLetterOrDigit.test(str4)); // false

// const startsFromDigitOrLetter = /^[\d\w]/;
// const str1 = 'Toyota';
// const str2 = '1toyota';
// const str3 = 'Opel';
// const str4 = ' opel';
// console.log(startsFromDigitOrLetter.test(str1));
// console.log(startsFromDigitOrLetter.test(str2));
// console.log(startsFromDigitOrLetter.test(str3));
// console.log(startsFromDigitOrLetter.test(str4));

/*
Закрепим практикой.
1. Написать регэксп, который проверяет, что строка начинается с четной цифры.
2. Проверить, что строка заканчивается НЕ на пробельный символ, и НЕ на цифру.
3. Проверить, что строка начинается на заглавную гласную букву, и заканчивается на маленькую букву. (Задача с подвохом).
*/

const startFromEven = /^[02468]/;

const endNotLS = /[\d\s]$/;
console.log(!endNotLS.test('something'))
console.log(!endNotLS.test('something1'))
console.log(!endNotLS.test('something '))

const startsWithCapitalLetter = /^[AOEIUY].{0,}[a-z]$/;
console.log(startsWithCapitalLetter.test('Opel'));
console.log(startsWithCapitalLetter.test('OpEL'));

// const reg1 = /^\d.{0,}\w$/
// const str5 = '1timon';
// const str6 = 'timon1';
// console.log(reg1.test(str5));
// console.log(reg1.test(str6));
