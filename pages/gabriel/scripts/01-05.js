// 01

alert(`Olá Mundo! Número inteiro: ${2 + 2}`);

//04 e 05

let submit = document.querySelector("#submit");
submit.addEventListener("click", showName);

function showName() {
  let div = document.querySelector("#div");
  let name = document.querySelector("#name").value;
  if (name == 0) {
    let semNada = "Digite alguma coisa!";
    div.innerHTML = semNada;
  } else {
    let mensagem = `Olá ${name}, seu nome todo tem ${name.replace(/\s+/g, "").length} letras.`;
    div.innerHTML = mensagem;
  }
}

