let nombresAmigos = []
let input = document.getElementById('valorUsuario')
let lista = document.getElementById('listaAmigos')
let resultado = document.getElementById('resultado')

function agregarAmigo(){

let nombre = input.value;

if (nombre === "") {
    alert('introduce un nombre valido');
    limpiarCaja();
    return;
}       

nombresAmigos.push(nombre);
console.log(nombresAmigos);
limpiarCaja();
lista.innerHTML = ""

for (let amigo of nombresAmigos){
    let li = document.createElement("li");
    li.textContent = amigo
    lista.appendChild(li);
}
}


function limpiarCaja(){
    input.value = ''
}

function sortearAmigo (){
if(nombresAmigos.length === 0 ){;
    alert('introduzca un nombre para sortear');
    return
}
let sorteo = parseInt(Math.random()*nombresAmigos.length);
let sorteoEntero = Math.floor(sorteo)
let amigoSorteado = nombresAmigos[sorteoEntero];
resultado.innerHTML = `🎉 El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
console.log(amigoSorteado);

}