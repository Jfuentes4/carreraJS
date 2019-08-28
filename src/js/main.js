import Carrera from './Carrera.js';

class Main {
  constructor () {
    document.getElementById('btnNewCarrera').addEventListener('click', this.startCarrera);
  }

  startCarrera () {
    let carrera = new Carrera();
    carrera.start();
  }
}

var main = new Main();
