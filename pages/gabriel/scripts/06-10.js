// 06 e 07
let lampada = document.querySelector("#lampada");

lampada.addEventListener("mouseover", mudarSrcOn);
lampada.addEventListener("mouseout", mudarSrcOff);

function mudarSrcOn() {
  lampada.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada-on.jpg?raw=true";
}
function mudarSrcOff() {
  lampada.src = "https://github.com/gabrieldarezzo/helpjs-ravi/blob/master/images/lampada.jpg?raw=true";
} 

// 07a
let pName = document.querySelector("#nome07a").innerHTML;
let pSobrenome = document.querySelector("#sobrenome07a").innerHTML;
setTimeout(time, 2000)
function time() {
  alert(`${pName} ${pSobrenome}`)
}

// 08
let cpf = document.querySelector('#cpf08');
let divDigitando08 = document.querySelector('#digitando08');
let cpfTexto = document.querySelector('#cpfTexto08');

cpf.addEventListener('keydown', digitando08);
cpf.addEventListener('keyup', digitou08);
cpf.addEventListener('keyup', mascaraCpf08);
divDigitando08.innerHTML = "Digite alguma coisa!";

function digitando08() {
  divDigitando08.innerHTML = "digitando...";
}
function digitou08() {
  setTimeout(function() {
    divDigitando08.innerHTML = "";
  }, 3000)
}
function mascaraCpf08() {
  cpfTexto.innerHTML = 
  cpf.value
  .replace(/\D/g,"")
  .replace(/(\d{3})(\d)/,"$1.$2")
  .replace(/(\d{3})(\d)/,"$1.$2")
  .replace(/(\d{3})(\d{1,2})$/,"$1-$2");
}

// 09
let cpfPoint = document.querySelector('#cpfPoint09');
let divDigitando09 = document.querySelector('#digitando09');
let cpfPointTexto = document.querySelector('#cpfPointTexto09');
divDigitando09.innerHTML = "Digite alguma coisa!";

cpfPoint.addEventListener('keydown', digitando09);
cpfPoint.addEventListener('keyup', digitou09);
cpfPoint.addEventListener('keyup', substituir09);

function digitando09() {
  divDigitando09.innerHTML = "digitando...";
}
function digitou09() {
  setTimeout(function() {
    divDigitando09.innerHTML = "";
  }, 3000)
}
function substituir09() {
  cpfPointTexto.innerHTML = 
  cpfPoint.value
  .replaceAll(".","")
  .replaceAll("-","");
}
//https://www.youtube.com/watch?v=TEzH_lC_5aw

// 10
let soma1 = document.querySelector("#soma1");
let soma2 = document.querySelector("#soma2");
let btnSoma = document.querySelector("#btn-soma");
let resultadoSoma = document.querySelector("#resultado-soma");

btnSoma.addEventListener('click', soma);

function soma(){
  resultadoSoma.innerHTML = parseFloat(soma1.value) + parseFloat(soma2.value);
}