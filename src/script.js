document.addEventListener("DOMContentLoaded", function () {
  var botao = document.getElementById("meuBotao");

  botao.addEventListener("click", function () {
    // Simular uma longa tarefa JavaScript que bloqueia o thread principal
    var start = Date.now();
    while (Date.now() - start < 5000) {
      // Loop vazio para simular uma tarefa pesada de 5 segundos
    }
    // Exibir mensagem após o bloqueio
    alert("Isso levou 5 segundos para responder!");
  });

  var botao2 = document.getElementById("meuBotao2");

  botao2.addEventListener("click", function () {
    // Exibe a mensagem antes de carregar a função pesada
    document.getElementById("mensagem").style.display = "block";

    // Usar setTimeout com 0 milissegundos para deixar o navegador processar a atualização de DOM
    setTimeout(function () {
      // Simular uma longa tarefa JavaScript que bloqueia o thread principal
      var start = Date.now();
      while (Date.now() - start < 5000) {
        // Loop vazio para simular uma tarefa pesada de 5 segundos
      }
      alert("Isso levou 5 segundos para responder!");
      document.getElementById("mensagem").style.display = "none";

    }, 0);
  });
});
