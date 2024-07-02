let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero ${intentos} ${(intentos === 1) ? 'ves' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'Numero secreto es menor');
        } else{
            asignarTextoElemento('p', 'Numero secreto mayor');
        }
        intentos++;
        limpiarCaja();
    }     
    return;
}

function limpiarCaja() {
    document.querySelector('#valorDeUsuario').value = '';
}

function generalNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados)
    //Si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles')
    }else{
        //Si el numero generado esta incluido a la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generalNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generalNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    // Limpair caja
    limpiarCaja();
    //Indica mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Indicializar el numero de intentis
    condicionesIniciales();
    //Dehabilitar el nuevo boton
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}

condicionesIniciales();