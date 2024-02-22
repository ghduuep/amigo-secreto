let amigos = [];

function adicionar() {
    let amigo = (document.getElementById('nome-amigo').value).toUpperCase();
    if (amigo == '') {
        alert('Informe o nome para continuar!');
        return;
    }

    if (amigos.includes(amigo)) {
        alert(`${amigo} já esta incluído na lista!`);
        return;
    }
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo);
    if (lista.textContent == '') {
        lista.textContent = amigo
    } else {
        lista.textContent = lista.textContent + ', ' + amigo;
    }
    amigo = '';
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function sortear() {
    if (amigos.length < 4) {
        alert('Insira pelo menos 4 participantes');
        return;
    }

    embaralhar(amigos);
    let sorteio = document.getElementById('lista-sorteio')

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--> ' + amigos[i + 1] + '<br>';
        }
    }

}
function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}
