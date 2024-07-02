const categories = [
  { name: 'Товары', value: 'products' },
  { name: 'Услуги', value: 'services' },
  { name: 'Другое', value: 'other' }
];

/*
1. В скрипте есть массив с категориями. Нужно заполнить выпадающий список `#categorySelect` данными из этого массива.
*/

const selectEl = document.querySelector('#categorySelect');

categories.forEach( ({name, value}) => {
  const optionEl = document.createElement('option');
  optionEl.value = value;
  optionEl.textContent = name;

  selectEl.appendChild(optionEl);
});

/*
2. Сейчас в форме постоянно видно текстовое поле "Опишите Ваш вопрос здесь!". Нужно, чтобы по умолчанию это поле было бы скрыто, и показывалось при выборе категории "Другое" в `#categorySelect`.*/

const textAreaEl = document.querySelector('.callbakcFormContainer > textarea.callbackFormInput');

selectEl.addEventListener('change', (event) => {
  if (event.target.value === 'other') {
    textAreaEl.classList.remove('hidden');
  }
  else {
    textAreaEl.classList.add('hidden');
  }
});

/*
3. Реализуем первичную валидацию. Нужно, чтобы при утере фокуса (событие `blur`), для инпутов "Фамилия", "Имя", "Эл.почта", осуществлялась бы проверка, что они непустые. Если пустые - применять класс `errorField`. Если нет - этот класс не применять.
*/

const inputs = document.querySelectorAll('#lastName, #firstName, #email');

const inputValidator = (e) => {
  if (e.target.value.length === 0) {
    e.target.classList.add('errorField');
  }
  else {
    e.target.classList.remove('errorField');
  }
}

inputs.forEach( input => {
  input.addEventListener('blur', inputValidator);
})
