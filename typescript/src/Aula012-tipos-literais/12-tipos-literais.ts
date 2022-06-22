let x = 10; //eslint-disable-line
x = 0b1010;
const y = 10;
let a = 100 as const; //eslint-disable-line

const pessoa = {
  nome: 'Alex' as const,
  sobrenome: 'Cesar',
};

function escolhaACor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaACor('Azul'));
// Module mode
export default 1;
