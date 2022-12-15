/* 11 - não tem */
/* 12a */
let verde = document.querySelector("#verde");
let vermelho = document.querySelector("#vermelho");
var quadradoCor = document.querySelector("#quadradoCor");

verde.addEventListener('click', () => {
    quadradoCor.style.backgroundColor = "green";
    console.log(quadradoCor);
})
vermelho.addEventListener('click', () => {
    quadradoCor.style.backgroundColor = "red";
    console.log(quadradoCor);
})
/* 13 */
/* comen
ta
rio */

/* 14 */
let vazio = document.querySelector("#vazio");
window.onload = () => {
    vazio.innerHTML = "Esse texto foi inserido pelo JavaScript...";
}

/* 15 */
let div15 = document.querySelector("#div15");
let button15 = document.querySelector("#button15");
button15.addEventListener('click', () => {
    div15.innerHTML = "Esse texto foi inserido pelo JavaScript...";
})