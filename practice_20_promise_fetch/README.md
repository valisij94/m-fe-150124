## Практическое занятие №20

### Тема: Работа с асинхронными операциями в JS.

Репозитарий содержит материалы по практическому занятию №20, посвященному работе с Promise API и отправке сетевых запросов.

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Разогрев
1. Что выведет код?
```
console.log('First');
const myPromise = new Promise( (resolve, reject) => {
  resolve('Result');
})
.catch( err => console.log(err))
.then( result => {
  console.log(result);
});
console.log('Third');
```

2. Что выведет код?
```
console.log('First');
const myPromise = new Promise( (resolve, reject) => {
  reject('Result');
})
.then( result => {
  console.log(result);
})
.catch( err => console.log(err));
console.log('Third');
```

3. Что выведет код?
```
console.log('First');
const myPromise = new Promise( (resolve, reject) => {
  resolve('Result');
})
.finally( () => console.log('Finally'))
.catch( err => console.log(err))
.then( result => {
  console.log(result);
});
console.log('Third');
```

4. Что выведет код?
```
console.log('First');
const myPromiseVariable = new Promise( (resolve, reject) => {
  resolve('Result');
})
.catch( err => console.log(err))
.then( result => {
  return result;
});
console.log('Third');
```

### Задачи занятия
1. Пишем сетевой запрос. Наша задача - обратиться к "бэку" по адресу `https://dummyjson.com/products/categories` GET-запросом, и вывести в консоль результат в "удобоваримом" виде (результат нам возвращается в виде JSON). Этот запрос нам вернет массив с категориями товаров.
2. Добавляем в разметку ПЕРЕД блоком `.productsContainer` компонент `select` (выпадающее меню). Нужно заполнить этот `select` опциями (`<option value='value'>option_text</option>`), которые нам пришли с "бэка" в предыдущей задаче. То есть, пройтись по массиву результатов, для каждого создать элемент `option`, и добавить его в наш `select`. В качестве `value` используем значение, в качестве `option_text` используем то же.
3. Пишем функцию `getProducts`. В качестве аргумента, она принимает категорию товаров. Она должна сделать запрос по адресу `https://dummyjson.com/products/category/ИМЯ_КАТЕГОРИИ`. В ответ нам придет список товаров этой категории. Наша задача - отрендерить их в списке товаров (`div.productsContainer`).  ВАЖНО! Список товаров перед рендерингом надо очистить! Товары рендерим с помощью функции `renderProduct`, она умеет создавать DOM-элемент, но нужно его еще добавить в контейнер.
4. Дорабатываем функцию `getProducts`. Нужно добавить рассмотрение случая, когда у нас не задана категория (хотим запросить все товары). Нужно сделать так, чтобы, если в аргументе не передана категория, то запрос шел на адрес `https://dummyjson.com/products`.
5. Добавляем обработчик события `change` на наш `select`. При событии, нам нужно вызывать функцию из п.12 с соответствующей категорией - т.е. мы рисуем список товаров выбранной категории.
6. Добавляем "иконку загрузки" на нашу страницу. Добавляем перед нашим `select` контейнер (`div.loader`) с текстом "Подождите, идет загрузка...". По умолчанию он скрыт (`display: none`). Нам нужно показывать этот блок при начале запроса списка товаров, и скрывать, когда список товаров успешно загружен.

### Полезные ссылки
 - Спецификация [fetch](https://developer.mozilla.org/en-US/docs/Web/API/fetch) на MDN - англоязычная.
 - Русскоязычный гайд по отправке [POST-запросов](https://learn.javascript.ru/fetch#post-zaprosy).
### Полезные ссылки по промисам:
 - Подробный гайд по [Promise API](https://learn.javascript.ru/promise-basics) - русскоязычный.
 - Статья с примерами по использованию [Promises](https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/) - англоязычная. Включает в чебя также параллельное выполнение (`all`, `race`, `any`, и т.д.)