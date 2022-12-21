/* 37-f */
let div37f = document.getElementById('div-37-f');
/* var deuses = ['Aegir', 'Aud', 'Balder'];
function pushLength(string) {
    for (var i = deuses.length; i < 4; i++) {
        deuses[i] = string;
    }
}
pushLength('Loki');
pushLength('Odin');
pushLength('Frey'); */
div37f.innerHTML = "Não consegui.";

/* 37-g */
let div37g = document.getElementById('div-37-g');
var numbers = [5, 7, 1, 8, 9]
div37g.innerHTML = numbers.sort()

/* 37-h */
let div37h = document.getElementById('div-37-h');
function sortfunction(a, b) {
    return b - a;
}
div37h.innerHTML = numbers.sort(sortfunction);

/* 38 */
let div38 = document.getElementById('div-38');
var deuses2 = ['Aegir', 'Aud', 'Balder', 'Bragi', 'Búri', 'Dag', 'Dellingr']
div38.innerHTML = deuses2;

/* 39 */
let btn39 = document.getElementById('btn-39');
let text39 = document.getElementById('text-39');
let ul39 = document.getElementById('ul-39');
let array39 = [];

btn39.addEventListener('click', setList);

function setList() {
    array39.push(text39.value);
    ul39.innerHTML += `<li>${text39.value}</li>`;
    console.log(array39);
}