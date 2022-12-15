/* 21 */
let num21 = document.querySelector("#num-21");
let btn21 = document.querySelector("#btn-21");
let div21 = document.querySelector("#div-21");

btn21.addEventListener("click", () => {
    desc = num21.value*(5/100);
    div21.innerHTML = `Desconto de R$${desc.toFixed(2)}`;
})

/* 22 */
let num22 = document.querySelector("#num-22");
let btn22 = document.querySelector("#btn-22");
let div22 = document.querySelector("#div-22");

btn22.addEventListener("click", () => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const year = today.getFullYear();
    div22.innerHTML = year - num22.value > 18 ? "Maior de idade" : "Menor de idade";
})

/* 23 */
let div23 = document.querySelector("#div-23");
div23.innerHTML = "Repetição";

/* 24 */
let div24 = document.querySelector("#div-24");
div24.innerHTML = "Repetição <br> Repetição";

/* 25 */
let div25 = document.querySelector("#div-25");
for (i=0; i<21; i++) {
    div25.innerHTML += "Repetição <br>";
    /* var text = document.createTextNode("Some text here!");
    div25.appendChild(text); */
    console.log(i);
}