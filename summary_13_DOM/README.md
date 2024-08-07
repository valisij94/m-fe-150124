## Итоговое занятие №13

### Тема: JavaScript. Работа с DOM.
Репозитарий содержит материалы по итоговому занятию №13, посвященному работе с DOM.

### Цели занятия
- закрепление знаний, полученных на лекциях;
- практическое применение знаний, полученных на лекциях.

### Задачи занятия
Продолжаем работать с роботом, которого программировали на предыдущем занятии. Были немного переписаны методы, которые управляют движением робота - теперь у нас в переменных `robotTop`, `robotLeft` хранятся координаты (целое число от 0 до 9), отображающие, в какой ячейке сетки поля 10х10 стоит наш робот.

Мы упростим задачу, и будем считать, что у нас сетка из ячеек 50ч50 пикселей.

1. Будем учить робота собирать нечто полезное. Пусть это будут яблоки. Нам нужно написать функцию `addTargets`, которая будет принимать в аргументах количество яблок, и добавлять их на поле. Нужно размещать их случайным образом. Задача к обсуждению.
 - яблоко - это тоже `div`. Его нужно создать, и добавить ему класс `apple`.
 - нужно контролировать, что мы не добавляем слишком много яблок - не больше 10. Если в аргументе зашло больше 10 - рисуем только 10.
 - яблоки нужно добавлять в контейнер `field`.
 - функция должна возвращать массив из объектов, каждый из которых содержит координаты яблока, и ссылку на DOM-элемент яблока.

2. Все хорошо, но реализация такова, что яблоки могут лежать друг на друге. Нужно это исправить - сделать так, чтобы яблоки размещались не одно на другом. Также к обсуждению.
3. Реализуем функцию `grabApple`. Она будет принимать в аргумент ссылку на DOM-узел с яблоком, и должна сделать так, чтобы яблоко плавно стало прозрачным.
4. Реализуем функцию `checkCross` - которая должна проверять, не заходит ли наш робот на яблоко. Если заходит - то вызывать функцию `grabApple`. Функцию `checkCross` нам нужно вызывать в каждой функции, которая двигает робота.
5. Реализуем счет. Нужно подсчитывать количество яблок, собранных роботом, а также количество шагов, которые сделал робот. Как только собраны все яблоки - нужно выводить в консоль сообщение "Ура, яблоки собраны! Вам потребовалось Х шагов!".
