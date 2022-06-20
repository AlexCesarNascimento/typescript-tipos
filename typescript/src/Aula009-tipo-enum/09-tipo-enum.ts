enum Cores {
  VERMELHO = 10, //0
  AZUL = 20, //1
  AMARELO = 30, //2
  ROXO = 40, //3
}

console.log(Cores); //{ VERMELHO: 0, AZUL: 1, AMARELO: 2 }
// console.log(Cores.VERMELHO); //0
// console.log(Cores[0]); //1
// console.log(Cores.ROXO); //

function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(Cores.AMARELO); //VERMELHO
