// * Recomendado

// Condicional, para fazer o refinamento de tipo *
const body1 = document.querySelector('body'); // type inferido = HTMLBodyElement | null
if (body1) body1.style.background = 'red';

// Non null assertion (!)
const body2 = document.querySelector('body')!; // type inferido = HTMLBodyElement
body2.style.background = 'red';

// Type assetion *
const body3 = document.querySelector('body') as HTMLBodyElement; // SÓ FAÇA ISSO QUANDO TIVER CERTEZA QUE NÃO SERÁ NULO
body3.style.background = 'red';

// HTMLElement *
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'Qualquer coisa';
input.focus();

// Type assetion
const body4 = document.querySelector('body') as unknown as number;
