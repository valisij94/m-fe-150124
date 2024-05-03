const address = {
  name: 'Persistent address',
  city: 'City',
  street: 'Street',
  house: 10
}

/*
1. Пристрелочная. У нас есть объект `address`. Добавьте ему свойство `country` со значением `Zimbabve`.
*/
address.country = 'Zimbabve';

/*
2. Создать глубокую копию объекта `address`. То есть, нам нужен НОВЫЙ объект, у которого будут такие же свойства, как и у `address`. Новый и старый объекты должны быть не зависимы друг от друга.
*/
// const newAddress = { ...address };

/*
3. Создать еще одну глубокую копию объекта `address`, при этом у нового объекта свойство `country` должно иметь значение `Kenia`.
*/
const newAddress1 = {
  ...address,
  country: 'Kenia'
};

/*
4. У нас есть массив адресов `products`. Нужно пройтись по массиву, и вывести в консоль строку, которая содержит конкатенацию значений свойства `countryMade` всех адресов, через запятую. Ожидаемый результат: `China,Georgia,Armenia`.
*/

const products = [
  { name: 'Ball', countryMade: 'China', price: 10},
  { name: 'Gloves', countryMade: 'Georgia', price: 15},
  { name: 'Shoes', countryMade: 'Armenia', price: 20}
]


// let res = [];
// for (let { countryMade } of products) {
//   res.push(countryMade);
// }
// console.log(res.join(','));

/*5. Пишем функцию `addCountryMade`. Она принимает на вход первым аргументом название страны-производителя, а далее принимает произвольное число аргументов-объектов. Нужно пройтись по всем объектам, и добавить им свойство `countryMade`, а в значение записать страну.
```
const ball = { name: 'Ball' };
const gloves = { name: 'Gloves' };
addCountryMade('Madagaskar', ball, gloves);
console.log(ball); // { name: 'Ball', countryMade: 'Madagaskar' }
```
*/

function addCountryMade(country, ...objects) {
  for (let i = 0; i < objects.length; i++) {
    objects[i].countryMade = country;
  }
  /*
  for (let obj of objects) {
    obj.countryMade = country;
  }
  */
}
const ball = { name: 'Ball' };
const gloves = { name: 'Gloves' };
addCountryMade('Madagaskar', ball, gloves);
// console.log(ball, gloves); // { name: 'Ball', countryMade: 'Madagaskar' }

/*
6. Пишем функцию `increasePrice`. Она должна принять на вход аргумент - добавляемую стоимость, и произвольное число объектов с данными товаров. У всех объектов есть свойство `price`. Нужно пройтись по товарам, и каждому из них увеличить значение свойства `price` на добавляемую стоимость.
*/
function increasePrice(addPrice, ...products) {
  for (let product of products) {
    product.price += addPrice;
  }
}

increasePrice(20, ...products);
// console.log( products )

/*
7. Пишем функцию `getTotalPrice`. Она примет на вход произвольное количество аргументов (объектов, у которых есть свойство `price`),и должна вернуть суммарную стоимость этих товаров.
*/

function getTotalPrice( ...products ) {
  let sum = 0;
  for (let product of products) {
    sum += product.price;
  }
  return sum;
}

// console.log( getTotalPrice(...products) );

/*
8. Задача на повторение строк. Пишем функцию `replaceBadWord`. Она принимает первым аргументом "плохое слово", вторым аргументом - "хорошее слово", и третьим - строку, в которой нужно заменить все вхождения плохого слова на хорошее слово.
```
replaceBadWord('bad', 'good', 'this string contains bad word. Yes, bad!);
// this string contains good word. Yes, good!
```
*/

function replaceBadWord(bad, good, str) {
  const splitted = str.split(bad); // ['this string contains ', ' word. Yes, ', '!']
  const result = splitted.join(good); // this string contains good word. Yes, good!
  return result;
}

// console.log( replaceBadWord('bad', 'good', 'this string contains bad word. Yes, bad!') );

/*
9. Усложним предыдущую задачу. Напишем функцию `replaceBadWords`, она будет первым аргументом принимать строку, в которой мы хотим заменить плохие слова, вторым аргументом она будет принимать "хорошее слово", и далее - произвольное число аргументов, плохих слов. Задача - заменить в строке все плохие слова на хорошее.
```
replaceBadWords(
  'this string contains bad words, also ugly and auwful words, jejeje!',
  'good',
  'bad',
  'ugly',
  'awful'
);
// this string contains good words, also good and good words, jejeje!
```
*/
function replaceBadWords(str, good, ...bad) {
  let result = str;
  for (let badWord of bad) {
    result = result.replaceAll(badWord, good);
    //result = result.split(badWord).join(good);
  }
  return result;
}

const res = replaceBadWords(
  'this string contains bad words, also ugly and auwful words, jejeje!',
  'good',
  'bad',
  'ugly',
  'auwful'
);
console.log(res);