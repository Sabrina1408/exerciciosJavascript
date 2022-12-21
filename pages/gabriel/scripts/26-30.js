/* 26 */
let div26 = document.querySelector("#div-26");
let numbs26 = [1, 2, 3, 4, 5];
numbs26.forEach((array26, index) => { /* Pode botar no parâmetro (numb26, index, array) */
    div26.innerHTML += `${index} - Repetição<br>`;
})

/* 27 */
let div27 = document.querySelector("#div-27");
let i = 0;
while (i<5){
    div27.innerHTML += `${i} - Repetição<br>`;
    i++;
}

/* 28 */
let div28 = document.querySelector("#div-28");
let j = 0;
do {
    div28.innerHTML += `${j} - Repetição<br>`;
    j++;
} while (j<5);


/* 29 */
let div29 = document.querySelector("#div-29");
let k = 0;
while (k<10){
    div29.innerHTML += `${k} - Repetição<br>`;
    k++;
}

/* 30 */

let div30 = document.querySelector("#div-30");
for (l=0;l<=20;l++){
    mod = l % 2;
    if(mod == 0){
        div30.innerHTML += `${l} - Par<br>`;
    }
}