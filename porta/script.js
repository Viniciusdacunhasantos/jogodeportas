function jogar() {
    let n_aleatorio = Math.floor(Math.random() * 2);
    let escolha_porta = document.getElementById("porta").value;
    let pergunta = document.getElementById("pergunta").value;
    let resposta = document.getElementById("resposta");
  
    let Q = eval(pergunta);
    let r1, r2;
  
    if (n_aleatorio === 0) {
      if (escolha_porta == 1) {
        r1 = Q;
        resposta.innerHTML = "A resposta é: " + r1;
      } else if (escolha_porta == 2) {
        r2 = !Q;
        resposta.innerHTML = "A resposta é: " + r2;
      }
    } else if (n_aleatorio === 1) {
      if (escolha_porta == 1) {
        r1 = !Q;
        resposta.innerHTML = "A resposta é: " + r1;
      } else if (escolha_porta == 2) {
        r2 = Q;
        resposta.innerHTML = "A resposta é: " + r2;
      }
    }
  
    resposta.innerHTML += "<br>Agora, escolha a porta vencedora!";
  
    // Exibe mensagem de confirmação em uma caixa de diálogo na página
    if (window.confirm("Digite 1 para entrar na porta 1 ou digite 2 para entrar na porta 2:")) {
      let n_final = parseInt(window.prompt("Qual porta você escolhe?"));
  
      if (n_aleatorio === 0 && n_final == 1) {
        resposta.innerHTML += "<br>Parabéns você ganhou, vitória!";
      } else if (n_aleatorio === 0 && n_final == 2) {
        resposta.innerHTML += "<br>Você perdeu, derrota!";
      } else if (n_aleatorio === 1 && n_final == 1) {
        resposta.innerHTML += "<br>Você perdeu, derrota!";
      } else if (n_aleatorio === 1 && n_final == 2) {
        resposta.innerHTML += "<br>Parabéns você ganhou, vitória!";
      }
    }
  }
  