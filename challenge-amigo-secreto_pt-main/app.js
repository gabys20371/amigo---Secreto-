  let listaDeAmigos = [];
        function adicionarAmigo() {
        let nome = document.getElementById('amigo').value;
      if (nome == '') {
         alert('Por favor insira um nome');
         return;
     } 
   if (listaDeAmigos.includes(nome)){
   alert(' Esse nome já foi adicionado , por favor inserir outro nome ')
    return;
}
         listaDeAmigos.push(nome); // adiciona nomes a lista
         limparCampo();
          atualizarListaDeAmigos(listaDeAmigos);
  
}

function limparCampo() {
  let limparNome = document.getElementById('amigo');
  limparNome.value = '';
}

// atualiza lista de amigos
  function atualizarListaDeAmigos(amigos) {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  amigos.forEach(amigo => {
    let li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

  function sortearAmigo() {
  // ver se há amigos disponíveis
    if (listaDeAmigos.length < 2) {
      document.getElementById('resultado').innerHTML = 'Não há amigos disponíveis para sortear';
    return;
  }

  // sortear amigo aleatório
  let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  let amigoSorteado = listaDeAmigos[indiceAleatorio];

  // Mostrar o resultado
  document.getElementById('resultado').innerHTML = `Amigo sorteado: ${amigoSorteado}`;
   dispararConfete();
  
  setTimeout(limparResultado,5000); // limpa o resultado em 5 segundos

  }    

  function limparResultado(){
  document.getElementById('resultado').innerHTML = '';
}
 // dispara confete após descobrir quem é seu amigo secreto 
  function dispararConfete() {
  var count = 200;
  var defaults = {
    origin: { y: 0.7 }
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, { spread: 26, startVelocity: 55 });
  fire(0.2, { spread: 60 });
  fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
  fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
  fire(0.1, { spread: 120, startVelocity: 45 });
}