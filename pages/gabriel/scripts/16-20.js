/* 16 */
let numUm16 = document.querySelector('#num-1-16'); /* input1 */
let numDois16 = document.querySelector('#num-2-16'); /* input2 */
let btn16 = document.querySelector('#btn-16');
let div16 = document.querySelector('#div-16');

btn16.addEventListener('click', chama16);

function chama16() {
    function soma(numUm, numDois) {
        div16.innerHTML = numUm + numDois;
    }
    soma(Number(numUm16.value), Number(numDois16.value));
}

/* 17 */
let numUm17 = document.querySelector('#num-1-17'); /* input1 */
let numDois17 = document.querySelector('#num-2-17'); /* input2 */
let btn17 = document.querySelector('#btn-17');
let div17 = document.querySelector('#div-17');

btn17.addEventListener('click', function() { /* Ao invés de 2 funções em uma, fazer dessa forma */
    soma(Number(numUm17.value), Number(numDois17.value));
});

function soma(numUm, numDois) {
    if(numUm == !arguments || numDois == !arguments) { /* Se botar ! na frente da variável */
        div17.innerHTML = 0;
    }
    else {
        div17.innerHTML = numUm + numDois;
    }
} 

/* 18 */
let div18 = document.querySelector('#div-18');
div18.innerHTML = 5%2;

/* 19 */
let num19 = document.querySelector('#num-19');
let btn19 = document.querySelector('#btn-19');
let div19 = document.querySelector('#div-19');

btn19.addEventListener('click', () => {
    mod = Number(num19.value) % 2 == 1 ? "Impar" : "Par";
    div19.innerHTML = mod;
});

/* 20 */
let numUm20 = document.querySelector('#num-1-20');
let numDois20 = document.querySelector('#num-2-20');
let btn20 = document.querySelector('#btn-20');
let div20 = document.querySelector('#div-20');


btn20.addEventListener('click', () => {
    multiplicacao(Number(numUm20.value), Number(numDois20.value));
});

function multiplicacao(numUm, numDois) {
    if(numUm == !arguments && numDois == !arguments) {
        div20.innerHTML = 0;
    } else {
        div20.innerHTML = numUm * numDois;
    }
}