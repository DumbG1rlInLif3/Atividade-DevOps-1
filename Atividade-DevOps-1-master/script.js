function atualizarDados() {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const curso = document.getElementById("curso").value;

  document.getElementById("resNome").innerText = nome || ". . .";
  document.getElementById("resIdade").innerText = idade || ". . .";
  document.getElementById("resCurso").innerText = curso || ". . .";
}
