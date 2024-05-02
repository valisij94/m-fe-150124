## Практическое занятие №10

### Тема: Spread, rest оператор в JS. Деструктурирующее присваивание. Повторение ранее пройденного.

Репозитарий содержит материалы по практическому занятию №9, посвященному работе с оператором spread/rest, а также деструктуризацией.

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Разогрев
1. Что будет в результате выполнения фрагмента кода:
```
let bilbo = {
  name: 'Bilbo',
  lastname: 'Baggins',
  race: 'Hobbit',
  bag: {
    material: 'Leather',
    volume: 35
  }
}

let frodo = {
  name: 'Frodo',
  lastname: 'Baggins',
  race: 'Hobbit',
}

let sam = {
  name: 'Samoise',
  lastname: 'Gandzhie',
  race: 'Hobbit'
}

frodo.bag = bilbo.bag;
sam.bag = { ...frodo.bag };

frodo.bag.material = 'Textile';

console.log(sam.bag.material);
```

2. Что будет в результате выполнения фрагмента кода:
```
let dwarwes = ['Torin', 'Dvalin', 'Balin'];
const dwarwesCopy = dwarwes;
dwarwesCopy.push('Gimli');
console.log(dwarwes);
```

3. Что будет в результате выполнения фрагмента кода:
```
let orcs = ['Azog', 'Bolg'];
const orcsCopy = orcs.slice();
orcsCopy.push('Trall');
console.log(orcs);
```

### Задачи занятия
1. Пристрелочная задача. У нас есть массив гномов `dwarwes`. Нужно отделить короля от остальных. С помощью деструктуризации, создайте переменные `king` (в нее записать Торина), `otherDwarwes` (сюда всех остальных).
2. Пишем функцию `getSum`. Она должна принимать произвольное количество аргументов (чисел), и возвращать их сумму.
```
getSum(1); // 1
getSum(1,2); // 3
getSum(1,2,3,4); // 10
```
3. Пишем функцию `armTheDwarwes`. Она должна в первом аргументе принять строку `weaponKind` (вид оружия), а дальше, через запятую, принять объекты с данными гномов. Нужно каждого гнома вооружить: добавить ему свойство `weapon`, и значение - из первого аргумента.
```
let torin = { name: 'Torin' };
let dvalin = { name: 'Dvalin' };
armTheDwarwes('Sword', torin, dvalin);
console.log(torin); // { name: 'Torin', weapon: 'Sword' }
```
4. Еще деструктуризация. У нас есть объект `torin`, который содержит данные о короле гномов Торине. Нам нужно с помощью деструктуризации записать в переменные данные о его вооружении и броне.
5. Усложним задачу. Теперь нам нужно записать это в переменные `torinsWeapons`, `torinsArmours` - то есть использовать алиасы.
6. Еще усложним (задача "со звездочкой"). Теперь нужно определить переменные `secondWeapon`, `secondArmour`, и в них записать второе оружие и второй элемент брони Торина.

### Теоретическая вводная
Методы строк `toUpperCase`, `toLowerCase`. Эти методы применяются к строкам, и приводят их к верхнему/нижнему регистру.
```
const str = 'String';
console.log(str.toUpperCase()); // STRING
console.log(str.toLowerCase()); // string
```

То есть, каждый символ строки приводится к верхнему/нижнему регистру. Возвращается НОВАЯ строка, то есть метод не мутирует старую.

1. Привести слово `uppercased` к верхнему регистру и вывести в консоль.
2. Написать функцию `uppercaseSome`, она принимает в аргументах несколько строк, через запятую, и возвращает одну строку, которая содержит конкатенацию всех строк-аргументов, приведенных к верхнему регистру.
```
uppercaseSome('This', 'is', 'a', 'STrIng'); // THISISASTRING
```

3. Усложним предыдущую задачу - теперь надо чтобы было разделение пробелами.
```
uppercaseSome('This', 'is', 'a', 'STrIng'); // THIS IS A STRING
```

4. Пишем функцию `upperCaseFirst`. Она должна принимать строку, и возвращать новую строку, где первый символ приведен к верхнему регистру.
```
upperCaseFirst('timon'); // Timon
```

5. Пишем функцию `uppercaseVovels`. Принимает строку, и возвращает строку, в которой все гласные приведены к верхнему регистру.
```
uppercaseVovels('timon and pumba'); //tImOn And pUmbA
```


### Полезные ссылки по занятию:
 - [Деструктурирующее присваивание](https://learn.javascript.ru/destructuring-assignment) в JavaScript.
 - [spread, rest](https://learn.javascript.ru/rest-parameters-spread-operator) операторы.