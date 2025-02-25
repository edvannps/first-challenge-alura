//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array para armazenar os nomes dos participantes
const participantes = [];

// Função para adicionar um nome ao array de participantes
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome) {
    participantes.push(nome);
    atualizarListaAmigos();
    input.value = "";
    input.focus();
  }
}
