// код пишем здесь!

/*
1. Отработка взаимодействия с localStorage
- реализовать сохранение в localStorage ключа test, и значения 100.
- реализовать получение ключа test из localStorage, и вывод его в консоль.
- очистить ключ test в localStorage.
*/

// localStorage.setItem('test', 100);
// const res = localStorage.getItem('test');
// console.log( typeof res );
// localStorage.removeItem('test');

/*
2. Реализовать запоминание времени первого посещения сайта, и вывод его в консоль. То есть, на событие загрузки документа добавить обработчик, который:
 - проверит наличие в localStorage ключа `firstEnter`.
 - если его нет - запомнит в localStorage значение текущего времени (использовать конструкцию `let firstEnter = Date.now();`), с ключом `firstEnter`.
 - если такой ключ есть - вывести его в консоль.
 */
// document.addEventListener('DOMContentLoaded', () => {
//     let firstDate = localStorage.getItem('firstEnter');
//     if (firstDate) {
//         console.log(firstDate);
//     }
//     else {
//         localStorage.setItem( 'firstEnter', Date.now() );
//     }
// });

/*
3. Реализовать сохранение значения инпута в localStorage, а именно:
 - средствами JS добавить в `main.mainContainer`, инпут.
 - на инпут, на событие потери фокуса, добавить обработчик, который сохранит в localStorage значение инпута (использовать ключ inputValue)
 - на событие загрузки документа, добавить обработчик, который проверит наличие в localStorage ключа inputValue. Если такой имеется - то его значение записать в инпут.
 */

document.addEventListener('DOMContentLoaded', () => {
    let input = document.createElement('input');

    const container = document.querySelector('.mainContainer');
    container.append(input);

    input.addEventListener('blur', (e) => {
        localStorage.setItem('inputValue', e.target.value)
    });

    const storedValue = localStorage.getItem('inputValue');
    if (storedValue) {
        input.value = storedValue;
    }
});

document.body.append()