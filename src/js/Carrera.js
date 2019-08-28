import Corredor from './Corredor.js';
import Dado from './Dado.js';

class Carrera {
  constructor () {
    this.dado = new Dado();
  }

  start = () => {
    let corredor1 = new Corredor(1);
    let corredor2 = new Corredor(2);

    do {
      corredor1.correr(this.dado.lanzar());
      console.log('El corredor numero ' + corredor1.numero + ' se encuentra en el metro ' + corredor1.avance);
      corredor2.correr(this.dado.lanzar());
      console.log('El corredor numero ' + corredor2.numero + ' se encuentra en el metro ' + corredor2.avance);


    } while (corredor1.avance < 100 && corredor2.avance < 100)

    if(corredor1.avance >= 100 && corredor2.avance >= 100) console.log('empate')
    else if(corredor1.avance >= 100) console.log('gana corredor no: ' + corredor1.numero)
    else if(corredor2.avance >= 100) console.log('gana corredor no: ' + corredor2.numero)

  }
}

export default Carrera;
