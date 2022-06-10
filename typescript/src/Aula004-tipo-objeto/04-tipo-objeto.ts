const objetoA: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown; // inndex signature
} = {
  chaveA: 'valorA',
  chaveB: 'valorB',
};

objetoA.chaveA = 'novoValorA';
objetoA.chaveB = 'novoValorB';
objetoA.chaveC = 'ValorC';
objetoA.chaveD = 'ValorD';

console.log(objetoA);
