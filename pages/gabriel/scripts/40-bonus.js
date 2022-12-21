/* 40 */
let btn40 = document.getElementById('btn-40');
let num40 = document.getElementById('num-40');
let ul40 = document.getElementById('ul-40');
let array40 = [];

btn40.addEventListener('click', setList);

function setList() {
    array40.push(Number(num40.value));
    // Não fazer \/
    //let li40 =`<li>${Number(num40.value)}</li>`
    //ul40.innerHTML += li40;
    let li40 = document.createElement("li");
    li40.innerHTML = Number(num40.value);
    document.body.appendChild(li40);
    ul40.appendChild(li40);

    console.log(array40.sort()); // ta dando erro
    if(Number(num40.value)%2 == 0){
        li40.style.backgroundColor = "red";
    }
    /* forEach */
    /* array40.forEach((arrayNum40, index) => {
        let li40 = document.createElement("li");
        li40.innerHTML = arrayNum40;
        document.body.appendChild(li40);
        ul40.appendChild(li40);
    }) */
}

/* 41 */

let div41 = document.getElementById('div-41');
j=60;
setInterval(()=>{
    div41.textContent = j+" segundos";
    if (j>0){
        j--;
    }
}, 1000)

/* 42 */
var animacaoFrame = 0;

const animacaoUrso = [
    'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-1.png',
	'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-2.png',
	'https://raw.githubusercontent.com/gabrieldarezzo/helpjs-ravi/master/images/chara-3.png',
];
setInterval(()=>{
    document.getElementById("beerImg").src = animacaoUrso[animacaoFrame];
    animacaoFrame++;
    if(animacaoFrame>2){
        animacaoFrame=0;
    }
},200)