// Для задачи 1
const workers = [
  { name: 'Petr', work: () => new Promise( resolve => setTimeout(() => resolve('Corpus'), 700)) },
  { name: 'Vasilij', work: () => new Promise( resolve => setTimeout(() => resolve('Doors'), 1500)) },
  { name: 'Sergey', work: () => new Promise( resolve => setTimeout(() => resolve('Engine'), 3000)) },
  { name: 'Ivan', work: () => new Promise( resolve => setTimeout(() => resolve('Wheels'), 1000)) },
];

// Для задачи 2
const badWorkers = [
  { name: 'Worker1',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Corpus') : reject('Fail'), 700))
  },
  { name: 'Worker2',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Doors') : reject('Fail'), 1000))
  },
  { name: 'Worker3',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Engine') : reject('Fail'), 3000))
  },
  { name: 'Worker4',
    work: () => new Promise( (resolve, reject) => setTimeout(() => Math.random() < 0.5 ? resolve('Wheels') : reject('Fail'), 2000))
  },
];

/*
1. У нас есть массив с рабочими предприятия, которые работают на конвейере и собирают машины. У каждого объекта с данными рабочего, есть функция `work` - рабочий выполняет свою часть работы. Эта функция возвращает промис, который будет зарезолвлен той деталью, которую делает этот рабочий. Нужно написать функцию `assembleCar`, которая будет принимать на вход массив рабочих. Она пройдется по массиву рабочих, запустит для каждого его функцию `work`, соберет результаты в массив, и вернет этот массив.*/

// function assembleCar(workers) {
//   const promises = workers.map( el => el.work() );
//   return Promise.all( promises );
// }

// assembleCar(workers)
//   .then( res => console.log(res) );


/*
3. Переходим к ООП. Дорабатываем систему контроля версий. Реализуем у класса `VersionsControl` методы:
 - `major` - увеличить major на 1, а в minor и patch поставить 0.
 - `minor` - увеличить minor на 1, а в patch поставить 0.
 - `patch` - увеличить patch на 1.
*/

/*
4. Реализуем возможность истории версий. Нам нужно вести историю версий, т.е. при каждом изменении версии (вызове метода major, minor, patch) сохранять текущую версию.
*/

/*
5. Реализуем метод `rollback` - то есть откат к предыдущей версии.
*/

class VersionsControl {

  constructor(initialRevision, productName) {
    this.productName = productName;
    this._setRevision(initialRevision);
    this.history = [];
    this.addToHistory();
  }

  _setRevision(revision) {
    let [ major, minor, patch ] = revision.split('.');
    this.major = Number.parseInt(major);
    this.minor = Number.parseInt(minor);
    this.patch = Number.parseInt(patch);
  }

  rollback() {
    // взять последнюю версию из массива history
    // удалить этот элемент из массива
    // записать данные версии в соответствующие свойства
    if (this.history.length > 1) {
      this.history.pop();
      const prev = this.history.pop();
      this._setRevision(prev);
    }
  }

  addToHistory() {
    this.history.push(`${this.major}.${this.minor}.${this.patch}`);
  }

  getCurrentRevision() {
    return `Software ${this.productName}, release ${this.major}.${this.minor}.${this.patch}. All right reserved.`;
  }

  majorAdd() {
    this.major += 1;
    this.minor = 0;
    this.patch = 0;
    this.addToHistory();
  }

  minorAdd() {
    this.minor += 1;
    this.patch = 0;
    this.addToHistory();
  }

  patchAdd() {
    this.patch += 1;
    this.addToHistory();
  }
}

// const rev = new VersionsControl('1.0.0', 'Soft');
// console.log(rev.getCurrentRevision())
// rev.majorAdd();
// console.log(rev.getCurrentRevision());
// rev.minorAdd();
// console.log(rev.getCurrentRevision());
// rev.patchAdd();
// console.log(rev.getCurrentRevision());
// console.log(rev.history, rev.getCurrentRevision());
// rev.rollback();
// console.log(rev.history, rev.getCurrentRevision())

/*
6. Пишем класс `Queue`, который будет реализовывать простую очередь. Ему нужны методы `enqueue`, `dequeue`, то есть, положить что-то в очередь, и извлечь из очереди. Логика работы очереди - "первый зашел, первый вышел".

7. Теперь реализуем класс `Stack`. У него должны быть методы `get`, `put`. Тут логика работы "последний зашел - первый вышел".
*/

class Queue {

  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.items.length > 0) {
      return this.items.shift();
    }
  }
}

const myQueue = new Queue();
myQueue.enqueue({foo: 'bar'});
myQueue.enqueue({foo: 'baz'});
myQueue.enqueue({foo: 'bam'});
console.log(JSON.stringify(myQueue.items));
console.log(myQueue.dequeue());
console.log(myQueue.items)