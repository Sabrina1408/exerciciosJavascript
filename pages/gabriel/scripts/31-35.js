/* 31 */
let div31 = document.querySelector('#div-31');
for(i=0;i<=10;i++){
    for(j=0;j<=10;j++){
        /* div31.appendChild(document.createElement('div')); */
        div31.innerHTML += `${i} X ${j} = ${i*j} <br>`;
        if(j==10){
            div31.innerHTML += '<br>';
        }
    }
}

/* 32 */
let div32 = document.querySelector('#div-32');
let text32 = document.querySelector('#text-32');
let btn32 = document.querySelector('#btn-32');
btn32.addEventListener('click',()=>{ // indexOf() funciona também
    if(text32.value.includes("Dota") == true || text32.value.includes("dota") == true){
        div32.innerHTML = "Dota ou dota achado!";
    } else {
        div32.innerHTML = "Dota não foi achado!";
    }
})

/* 33 */
let div33 = document.querySelector('#div-33');
let btn33 = document.querySelector('#btn-33');
btn33.addEventListener('click', () =>{
    div33.innerHTML = `Números aleatórios entre 0 e 100: <br> ${Math.floor(Math.random() * 100)}`;
    // Math.floor pra arredondar, o Math.random só gera entre 0 e 1, * 100 para entre 0 e 100
})

/* 34 */

let div34 = document.querySelector('#div-34');
let num34 = document.querySelector('#num-34');
let btn34 = document.querySelector('#btn-34');
let numAle34 = Math.floor(Math.random() * 100);
k = 0;
// numAle33 do exercício anterior
btn34.addEventListener('click', () =>{
    if(num34.value == numAle34){
        k++;
        div34.innerHTML = `Você acertou o numero! <br> Tentativas: ${k}`;
    }
    if(num34.value < numAle34){
        div34.innerHTML = `Maior que ${num34.value}`;
        k++;
    }
    if(num34.value > numAle34){
        div34.innerHTML = `Menor que ${num34.value}`;
        k++;
    }    
})

/* 35 */
let div35 = document.querySelector('#div-35');
const timeElapsed = Date.now();
const today = new Date(timeElapsed);
div35.innerHTML = today.toLocaleDateString();

// https://www.freecodecamp.org/portuguese/news/date-now-em-javascript-como-obter-a-data-atual-em-javascript/#:~:text=O%20método%20getDate()%20retorna,o%20mês%20da%20data%20especificada.