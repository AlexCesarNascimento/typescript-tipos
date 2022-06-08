/* eslint-disable */

// Tipos básicos (aqui ocorre inferência de tipos)
let nome: string = 'Alex';
let idade: number = 30;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5];
let arrayDeNumeros2: number[] = [1, 2, 3, 4, 5];
let arrayDeStrings: Array<string> = ['a', 'b', 'c', 'd', 'e'];
let arrayDeStrings2: string[] = ['a', 'b', 'c', 'd', 'e'];

// Objetos
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
    nome: 'Alex',
    idade: 27,
    adulto: true
};

// Funções
function soma(x: number, y: number): number {
    return x + y;
}

const soma2: (x: number, y:number) => number = (x,y) => x + y;
