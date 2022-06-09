function semRetorno(...arg: string[]): void {
  console.log(arg.join(' '));
}

const pessoa = {
  nome: 'João',
  sobrenome: 'Silva',
  exibirNome(): void {
    console.log(`${this.nome} ${this.sobrenome}`);
  },
};

semRetorno('Alex', 'Maria', 'João');
pessoa.exibirNome();

export { pessoa };
