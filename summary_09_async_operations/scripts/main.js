const racers = [
  { name: 'Racer1', car: 'Geely' },
  { name: 'Racer2', car: 'Haval' },
  { name: 'Racer3', car: 'Zeekr' },
  { name: 'Racer4', car: 'GreatWall'},
  { name: 'Racer5', car: 'SsangYong'}
];

const winners = [];

function startRace(racer) {
  const rand = Math.random();
  return new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve(racer);
    }, rand * 1000);
  })
};

function finishRace(racer) {
  if (winners.length < 3) {
    winners.push(racer);
    console.log('Racer ' + racer.name + ' finished!');
  }
  else {
    console.log('Racer ' + racer.name + ' was too slow...')
  }
}

racers.forEach( racer => startRace(racer).then(finishRace));