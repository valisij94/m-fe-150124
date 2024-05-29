// код пишем здесь!

/*
1. Пристрелочная, вспоминаем ЛС. У нас в разметке есть блок с инпутом (`input#username`) и кнопкой `button#saveNameBtn`. Нужно сделать так, чтобы при нажатии на кнопку, в ЛС сохранялось бы то, что введено в инпут (используем ключ `username`).
*/

const userName = document.querySelector('#username');
const saveBtn = document.querySelector('#saveInputBtn');

// saveBtn.onclick = () => {
//     localStorage.setItem('username', userName.value);
// }

saveBtn.addEventListener('click', () => {
    localStorage.setItem('username', userName.value);
})


/*
2. Теперь, нужно добавить заполнение инпута данными. Нужно добавить в скрипт (именно в скрипт), блок кода, который достанет из ЛС значение из п.1, и если оно есть - запишет его в инпут.
*/
// const savedValue = localStorage.getItem('username');
// if (savedValue) {
//     userName.value = savedValue;
// }

/*
3. В разметке есть заголовок-приветствие `h2.greeting` (типа, приветствуем пользователя). Нужно, чтобы при первом визите пользователя на сайт, в заголовке был текст "Добро пожаловать, путник!". А если это не первый визит - то текст "И снова здравствуй, странник!".
*/

const greeting = document.querySelector('.greeting');

const isFirstVisit = localStorage.getItem('firstVisit');

if (isFirstVisit) {
    // not first visit
    greeting.textContent = 'И снова здравствуй, странник!';
}
else {
    // first visit
    greeting.textContent = 'Добро пожаловать, путник!';
    localStorage.setItem('firstVisit', 'true');
}

/*
4. Теперь, еще немного поработаем с DOM. Написать блок кода, который добавит на страницу, в конец блока `div.firstBlock` еще один инпут, с плейсхолдером `Last Name`, id = `userlastname`.
*/

const newInput = document.createElement('input');
newInput.id = 'userlastname';
newInput.placeholder = 'Last Name';

const firstBlock = document.querySelector('.firstBlock');
firstBlock.append(newInput);