/*
1. Пристрелочная. Пишем функцию `upperCaseFirst`. Она принимает на вход строку, и должна вернуть эту строку, у которой первый символ приведен к верхнему регистру, а остальные  - к нижнему. Также, нужно удалить пробелы из начала и конца строки (используем метод `trim`)
```
upperCaseFirst('tIMoN'); // 'Timon'
upperCaseFirst('  pumBA  '); // 'Pumba'
```
*/

const upperCaseFirst = (string) => {
  let str = string.trim();
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// console.log(upperCaseFirst('tIMoN')); // 'Timon'
// console.log(upperCaseFirst('  pumBA  ')); // 'Pumba')

/*
2. Пишем функцию `toCamelCase`. Функция будет принимать строку из слов, разделенных пробелами. Задача - вернуть ее в camelCase. Нужно также удалить пробелы из начала и конца строки. Важно: первое слово должно начинаться с маленькой буквы. При решении, можно использовать функцию из задачи 1.
```
toCamelCase('timon and pumba'); // timonAndPumba
toCamelCase(' Put ThiS INTO cAmEl CASE ' ); // putThisIntoCamelCase
```
*/


const toCamelCase = (str) => {
  let words = str.trim().split(" ");
  words[0] = words[0].toLowerCase();
  for (let i = 1; i < words.length; i++) {
      words[i] = upperCaseFirst(words[i]);
  }
  const camelCaseString = words.join("");
  return camelCaseString;
};

/*
3. Напишем функцию `toSnakeCase`. Она тоже принимает на вход строку из слов, разделенных пробелами, и возвращает строку в snakeCase.
```
toSnakeCase('timon and pumba'); // timon_and_pumba
toSnakeCase(' put ThiS INTO sNaKe CASE ' ); // put_this_into_snake_case
```
*/

const toSnakeCase = (str) => {
  return str.trim().toLowerCase().split(' ').join('_');
}

/*
4. Переходим к колбэкам. Напишем свою реализацию метода `find`. Это будет функция, которая принимает 2 аргумента: массив и функцию-критерий отбора (колбэк). Наш find должен вернуть первый элемент массива, для которого критерий отбора возвращает `true`. Если такового нет - вернуть undefined.
*/

const find = (arr, callback) => {
  for (let el of arr) {
    if ( callback(el) ) {
      return el;
    }
  }
}

/*
5. Немного усложним. Напишем функцию `findNth`, которая будет принимать массив, колбэк-критерий поиска, и номер вхождения N. Она должна вернуть N-й элемент массива, для которого выполняется критерий поиска. Если такого нет - вернуть undefined.
```
findNth( [1,2,3,4,5,6,7,8,9,10], (x) => x % 2 === 0, 4); // 8 - потому что это 4-й элемент, удовлетворяющий критерию
```
*/

const findNth = (arr, callback, n) => {
  let count = 0;
  for (let elem of arr) {
    if (callback(elem)) {
      count++;
      if (count === n) return elem;
    }
  }
}

/*
6. Вспоминаем работу с объектами. Представим, что мы работаем в предметной области завода автотехники. Сейчас мы находимся в лакокрасочном цеху. Пишем функцию `addColor`. Она будет принимать на вход объект (корпус нашего автомобиля), и должна его покрасить в нужный цвет (это будет второй аргумент). То есть, нужно добавить нашему объекту свойство `color`, и в значение этого свойства записать второй аргумент (цвет машины). Если цвет машины не передан - красим в черный (`Black`).
```
const car = { name: 'Lada', type: 'Sedan' };
addColor(car, 'Baklazhan');
console.log(car); // { name: 'Lada', type: 'Sedan', color: 'Baklazhan' }
```
*/

function addColor(car, color = 'Black') {
  car.color = color || 'Black';
}

/*
7. Продолжаем работать с автосборкой. Теперь добавим возможность тонировки. Функция `addGlassTint`, должна принимать объект-автомобиль, и массив с названиями областей, которые надо затонировать (`windshiled`, `passengers`, `rear`). Функция должна добавить объекту-автомобилю свойство `tint`, в которое записать этот массив. Если массив не передан - тонируем только пассажирские (`passengers`) и заднее `rear` стекла.
*/

function addGlassTint(car, tintAreas = ['passengers', 'rear']) {
  car.tint = tintAreas.length === 0 ? ['passengers', 'rear'] : tintAreas;
}

function makeSits(car, material = 'alcantara') {
  car.sits = material || 'alcantara';
}

/*
9. Задача со звездочкой. Собираем "конвейер". Нам нужно написать функцию `assembleCar`. Она должна принимать на вход объект-машину, и какие-то функции-"сборщики" из задач 6-8. Нужно последовательно вызвать эти функции. Суть в том, чтобы получить возможность "на этапе сборки" указать, какие доработки мы хотим применить к машине. Пока что, функции вызываем без аргументов.
```
const car = { name: 'Lada', type: 'Sedan' };
assembleCar( car, addColor, makeSits );
console.log(car); // { name: 'Lada', type: 'Sedan', color: 'Black', sits: 'alcantara` };

const newCar = { name: 'Lada', type: 'Niva' };
assembleCar( newCar, addGlassTint );
console.log(newCar); // { name: 'Lada', type: 'Niva', tint: ['passengers', 'rear'] }
```
*/

function assembleCar(car, ...assemblers) {
  for (const func of assemblers) {
    func(car);
  }
}

const car = { name: 'Lada', type: 'Sedan' };
assembleCar( car, addColor, makeSits );
console.log(car); // { name: 'Lada', type: 'Sedan', color: 'Black', sits: 'alcantara` };

const newCar = { name: 'Lada', type: 'Niva' };
assembleCar( newCar, addGlassTint );
console.log(newCar); // { name: 'Lada', type: 'Niva', tint: ['passengers', 'rear'] }
