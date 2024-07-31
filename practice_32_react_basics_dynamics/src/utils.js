const GREETING = 'hello world from react!';

function upperCaseFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function upperCaseWords(str) {
  return str.split(' ').map( el => upperCaseFirst(el) ).join('');
}