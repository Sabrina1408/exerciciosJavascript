/* 36 */
let div36 = document.querySelector('#div-36');
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
let nextMonth = today.getMonth() + 2; // 13
if (nextMonth == 13) {
    nextMonth = 1;
    div36.innerHTML = nextMonth;
} else {
    div36.innerHTML = nextMonth;
}

/* 37-a */
let div37a = document.querySelector('#div-37-a');
var deuses = ['Aegir', 'Aud', 'Balder'];
div37a.innerHTML = deuses.length;

/* 37-b */
let div37b = document.querySelector('#div-37-b');
// var deuses do 37-a
let i = 0;
while (i < deuses.length) {
    div37b.innerHTML += deuses[i] + "\n";
    i++;
}

/* 37-c */
// var deuses do 37-a
let div37c = document.querySelector('#div-37-c');
deuses.map(nome => div37c.innerHTML += nome + "\n"); // function com parâmetro nome
// .map() = Passa a função e o que retornar verdadeiro vai pra array final
// https://www.youtube.com/watch?v=XiAtxDeP-p8
let a = "1";
console.log(+a) // Se colocar o mais na frente retorna a string como numero

/* 37-e */
let div37e = document.querySelector('#div-37-e');
// var deuses do 37-a
deuses.push('Loki', 'Odin', 'Frey');
div37e.innerHTML = deuses;
