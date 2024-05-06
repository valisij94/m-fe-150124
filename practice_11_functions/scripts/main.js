const dwarwes = ['Torin', 'Dvalin', 'Balin', 'Filli', 'Killi', 'Gimli', 'Bombur'];

/*
1. Пристрелочная задача. У нас есть массив гномов `dwarwes`. Нужно отделить короля от остальных. С помощью деструктуризации, создайте переменные `king` (в нее записать Торина), `otherDwarwes` (сюда всех остальных).
*/

const [king, ...otherDwarwes] = dwarwes;
console.log(king, otherDwarwes);

/*
2. Пишем функцию `getSum`. Она должна принимать произвольное количество аргументов (чисел), и возвращать их сумму.
```
getSum(1); // 1
getSum(1,2); // 3
getSum(1,2,3,4); // 10
```
*/

function getSum( ...numbers ) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

/*
3. Пишем функцию `armTheDwarwes`. Она должна в первом аргументе принять строку `weaponKind` (вид оружия), а дальше, через запятую, принять объекты с данными гномов. Нужно каждого гнома вооружить: добавить ему свойство `weapon`, и значение - из первого аргумента.
*/

function armTheDwarwes(value, ...array) {
    for (let i = 0; i < array.length; i++) {
        array[i].weapon = value;
    }
}

let torin1 = { name: 'Torin' };
let dvalin1 = { name: 'Dvalin' };
let balin1 = { name: 'Balin' };

function getDwarwesNames(...dwarwes) {
    // let result = '';
    // // dwarwes = [ { name: 'Torin }, { name: 'Dvalin' } ]
    // for (let elem of dwarwes) {
    //     // elem = { name: 'Torin' } -  1st iteration
    //     // elem = { name: 'Dvalin' } - 2nd iteration
    //     result += elem.name;
    // }
    // return result;

    let result = [];
    for (let elem of dwarwes) {
        result.push(elem.name);
    }
    return result.join(',');
}
console.log(getDwarwesNames(torin1, dvalin1, balin1))

// getDwarwesNames(torin1, dvalin1, balin1); // Torin,Dvalin,Balin

armTheDwarwes('Sword', torin1, dvalin1);

console.log(torin1, dvalin1); // { name: 'Torin', weapon: 'Sword' }


const torin = {
    name: 'Torin',
    lastname: 'Oakshield',
    race: 'Dwarwes',
    weapons: ['Sword', 'Dagger', 'Axe'],
    armours: ['Helmet', 'Shield', 'Chain Armour']
}