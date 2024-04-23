## Итоговое занятие №2

### Тема: JavaScript. Основы.
Репозитарий содержит материалы по итоговому занятию №2, посвященному основам JavaScript.

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Разогрев
1. Что выведет код:
```
let result = true || (false && true);
console.log(result);
```
2. Что выведет код:
```
let result = 1 && 0 && 1;
console.log(result);
```

3. Что выведет код:
```
let result = 1 || '1';
console.log(result);

let result1 = 0 || '1' || 0;
console.log(result1);

let result2 = '0' || 1 || 0;
console.log(typeof result2, result2);
```

4. Что выведет код:
```
let result = 'false' || true;
console.log(result);
```

5. Что выведет код:
```
let result = NaN || 'NaN' || true;
console.log(result);
```

6. Что выведет код:
```
let result = null || undefined || false;
console.log(result);
```

7. Что выведет код:
```
let result = 'null' || undefined || NaN;
console.log(result);
```

### Задачи занятия

1. Пристрелочная. Написать функцию `repeat`, она будет принимать 2 аргумента: число `n` и строку `str`. Задача функции - `n` раз вывести в консоль строку `str`.
2. Еще пристрелка. Написать функцию `customPow`, которая будет возводить число в степень и выводить в консоль. Она будет принимать 2 аргумента: основание и показатель степени. При этом НЕ использовать Math.pow.
3. Пишем функцию `multiplyString`. Она принимает строку, и число. Должна ввыести в консоль строку, повторенную n раз.
```
multiplyString('str', 3); // strstrstr
multiplyString('pumba', 2); // pumbapumba
```

4. Усложняем предыдущую функцию. Добавляем проверку, что переданное число больше 0. Если нет - просто выводим в консоль нашу строку из аргумента.
5. Пишем функцию `getSquares`. Она будет принимать в аргументе массив чисел. Нужно пройтись по массиву и вывести в консоль квадраты чисел.
6. Пишем функцию `countWords`. Она должна подсчитать количество слов в строке. Строка содержит слова, разделенные пробелами. Считаем, что в строке нет "лишних" пробелов.
```
countWords('Timon and Pumba!'); // 3
```

7. Написать функцию, которая примет аргумент (строку), и будет выводить ее в консоль посимвольно.
8. Написать функцию, которая примет строку, и будет выводить в консоль ее символы, пока не достигнет первого символа `Q`.
9. Написать БЛОК КОДА, который будет запрашивать у пользователя ввод чего-то в `prompt` до тех пор, пока он не введет строку `stop`.
10. Задача "со звездочкой". У нас есть "робот", который может двигаться только назад и вперед. Он программируется строкой, которая содержит символы D (шаг вперед), и R (шаг назад). Нужно подсчитать, куда по итогу выполнения строки команд передвинется робот относительно старта.
```
moveRobot('DDD'); // 3 - то есть на 3 шага вперед
moveRobot('RR'); // -2 - то есть на 2 шага назад
moveRobot('DDR'); // 1 - то есть на 1 шаг вперед (потому что он сделал 2 шага вперед и 1 - назад)
moveRobot('DRDRDR'); // 0 - никуда не сдвинулся
```

11. Задача "со звездочкой". Теперь программируем робота, который может поворачиваться на 90 градусов вправо и влево (команды R, L). Определить, на какое количество градусов относительно своего начального положения повернулся робот. Градусы идут от 0 до 360 по часовой стрелке.
```
turnRobot('RR'); // на 180 градусов
turnRobot('RRL'); // на 90 градусов
turnRobot('RRRR'); // на 0 градусов (совершил полный оборот)
```

12. Задача "с двумя звездочками". Есть робот, который стоит в декартовой системе координат, в точке (0;0), и смотрит "вверх" (в направлении оси Игрек). Программируется такими командами:
 - D - один шаг вперед
 - B - один шаг назад
 - L - поворот на 90 градусов влево
 - R - поворот на 90 градусов вправо

Определить координаты робота после выполнения строки команд.
```
move('DDDRD'); // координаты (1;3). Потому что робот сделал 3 шага вперед (оказался в точке (0;3) ), повернулся вправо, и сделал еще шаг вперед (оказался в точке (1;3) ).
```