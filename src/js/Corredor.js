class Corredor {
  constructor (numero) {
    this.numero = numero;
    this.avance = 0;
  }

  restart = () => {
    this.avance = 0;
  }

  correr = (dado) => {
    let avanza = 3;

    if (dado < 3) avanza = 1;
    else if (dado > 2 && dado < 6) avanza = 2;

    this.avance += avanza;
  }
}
 export default Corredor;
