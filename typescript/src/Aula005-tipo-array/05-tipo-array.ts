//Array<T> - t[]
export function multiplicaArgs(...args: Array<number>): number {
  return args.reduce((ac, valor) => ac * valor, 1);
}

export function concatenaStrings(...args: string[]): string {
  return args.reduce((ac, valor) => ac + valor);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multiplicaArgs(1, 2, 3);
console.log(result);

const concatenacao = concatenaStrings('a', 'b', 'c');
console.log(concatenacao);

const upper = toUpperCase('a', 'b', 'c');
console.log(upper);
