class Dado {
  constructor () {

  }

  lanzar = () => {
    let num = Math.ceil(Math.random() * 6);
    console.log(num);
    return num;
  }
}

export default Dado;
