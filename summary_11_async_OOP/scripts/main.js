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

class VersionsControl {

  constructor(initialRevision, productName) {
    this.productName = productName;
    let [ major, minor, patch ] = initialRevision.split('.');
    this.major = major;
    this.minor = minor;
    this.patch = patch;
  }

  getCurrentRevision() {
    return `Software ${this.productName}, release ${this.major}.${this.minor}.${this.patch}. All right reserved.`;
  }
}