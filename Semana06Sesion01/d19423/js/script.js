console.log('Inicio de la aplicacion')
if (typeof (Storage) !== "undefined") {
    console.log("Si esta habilitado el webstorage")
} else {
    console.log("El webstorage no esta habilitado")
}

//localStorage.setItem("cliente","Roberto Pineda")

function traerCliente(){
    let cliente = localStorage.getItem("cliente");
    alert(cliente);
}

function borrarCliente() {
    localStorage.removeItem("cliente")
}
function guardarSesion(){
    let dato = prompt("Guardar");
    sessionStorage.setItem("datos", dato);
}

function recuperarSesion(){
    let dato = sessionStorage.getItem("datos");
    alert(dato);
}
