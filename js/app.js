let amigos = [];

function adicionar(){

    let amigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    
    if(amigo.value==''){
        alert('Informe o nome do amigo!');
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado! Selecione outro nome.')
        return;
    }
    amigos.push(amigo.value);
    listaAmigos.textContent == ''? listaAmigos.textContent = amigo.value : listaAmigos.textContent += ', ' + amigo.value;
    amigo.value = '';
}

function sortear(){

    if(amigos.length < 4){
        alert('Adicione pelo menos quatro pessoas para realizar o serteio!');
        return;
    }   
        embaralhar(amigos);
        
        let listaSorteio = document.getElementById('lista-sorteio');
        
        for(let i=0; i<amigos.length; i++){
            if(i == amigos.length - 1){
                listaSorteio.innerHTML += amigos[i] + '-->' + amigos[0] + '<br>';
            }else{
                listaSorteio.innerHTML += amigos[i] + '-->' + amigos[i+1] + '<br>';
            }
        }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    amigos = [];
}