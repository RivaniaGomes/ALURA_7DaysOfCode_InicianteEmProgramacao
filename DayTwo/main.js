// seleรงรฃo de elementos
const btn = document.querySelector("#send");
const nome = document.querySelector("#nome");
const idade = document.querySelector("#idade");
const linguagem = document.querySelector("#linguagem");

// Funรงรตes
function save(nome, idade, linguagem) {
  if (window.localStorage) {
    localStorage.nome = nome;
    localStorage.idade = idade;
    localStorage.linguagem = linguagem;
  }
}

// Eventos
btn.addEventListener("click", function (e) {
  e.preventDefault();

  const nome = document.querySelector("#nome");
  const idade = document.querySelector("#idade");
  const linguagem = document.querySelector("#linguagem");

  const mensagem = `๐๐๐๐๐๐  Olรก ${nome.value}, vocรช tem ${idade.value} anos e jรก estรก aprendendo ${linguagem.value}!  ๐๐๐๐๐๐`;
  console.log(mensagem);
  document.getElementById("demo").innerHTML = mensagem;
  save(nome.value, idade.value, linguagem.value);
});
