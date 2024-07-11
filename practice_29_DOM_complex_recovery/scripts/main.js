const options = [
  {name: 'First', value: 'first'},
  {name: 'Second', value: 'second'},
  {name: 'Third', value: 'third'}
]

/* 2. Напишем функцию `renderOptions`. Она будет принимать в аргументах массив с вариантами выбора (объекты со свойствами `name`, `value`). нам нужно рендерить эти варианты в виде `div.dropdownOption`. Все они должны быть сложены в контейнер опций, `div.dropdownOptionsContainer`. При этом, нужно очищать контейнер (это понадобится позже). Тут задача с подвохом - нужно подумать, как мы будем хранить в данных опции значение атрибута `value`.
*/

/*
5. Теперь нужно сделать так, чтобы при фокусе на нашем выпадающем списке, показывался бы список опций, то есть вызывалась функция `expand`.
*/

const inputEl = document.querySelector('.dropdownInput');
inputEl.addEventListener('focus', expand);

inputEl.addEventListener('blur', () => {
  setTimeout(collapse, 100);
});

/*
6. Реализуем выбор опции - при выборе, нужно в тексте поля показывать текст выбранной опции, а в консоль вывести значение свойства `value` выбранной опции. Также нужно сворачивать список.
*/

const container = document.querySelector('.dropdownOptionsContainer');
function renderOptions(options) {
  container.innerHTML = '';
  options.forEach( opt => {
    const optEl = document.createElement('div');
    optEl.textContent = opt.name;
    optEl.classList.add('dropdownOption');
    optEl.dataset.value = opt.value;
    container.append(optEl);

    optEl.addEventListener('click', () => {
      inputEl.value = opt.name;
      console.log('Value', opt.value);
      collapse();
    });
  });
}

renderOptions(options);

/*
4. Пишем функции `expand`, `collapse`, то есть развернуть и свернуть наш список.
*/

function expand() {
  container.style.display = 'block';
}

function collapse() {
  container.style.display = 'none';
}

/*
7. Реализуем автодополнение. Когда мы вводим что-то в наше поле, мы должны фильтровать список опций, и перерисовывать его - рисовать только те опции, которые в свойстве `name` содержат введенную подстроку.
*/
inputEl.addEventListener('keyup', (e) => {
  const inputValue = e.target.value;
  const filtered = options.filter( el => el.name.toLowerCase().indexOf(inputValue.toLowerCase()) >= 0 );
  renderOptions(filtered);
});