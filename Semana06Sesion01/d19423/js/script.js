// console.log('Inicio de la aplicacion')
// if (typeof (Storage) !== "undefined") {
//     console.log("Si esta habilitado el webstorage")
// } else {
//     console.log("El webstorage no esta habilitado")
// }

// //localStorage.setItem("cliente","Roberto Pineda")

// function traerCliente(){
//     let cliente = localStorage.getItem("cliente");
//     alert(cliente);
// }

// function borrarCliente() {
//     localStorage.removeItem("cliente")
// }
// function guardarSesion(){
//     let dato = prompt("Guardar");
//     sessionStorage.setItem("datos", dato);
// }

// function recuperarSesion(){
//     let dato = sessionStorage.getItem("datos");
//     alert(dato);
// }
class Gundam{
    constructor(nombre, descripcion, imagen, escala, isCustom=false, custom=""){
        this.nombre = nombre;
        this.desripcion = descripcion;
        this.imagen = imagen;
        this.escala = escala;
        this.isCustom = isCustom;
        this.custom = custom;
    }
}

let objGundam = new Gundam("RX-78-2", `El RX-78-2 Gundam (también conocido como Gundam, Mobile Suit Blanco) es el mobile suit titular de la serie de televisión Mobile Suit Gundam.
Es parte de la serie RX-78 y fue construido en secreto en Side 7. Durante la Guerra de Un Año contra el Principado de Zeon, el Gundam pudo cambiar el rumbo del conflicto a favor de la Federación Terrestre. La unidad es pilotada por Amuro Ray.`,"img1.jpg", "1/144", true, "Pintura, Decals, Leds");

console.log(objGundam);
console.log(JSON.stringify(objGundam));

let strJson = `{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}`;

let objJson = JSON.parse(strJson);

console.log(objJson);

objJson.members.forEach(element => {
    console.log(element);
});


let strTitulo = document.getElementById("strTitulo");

console.log(strTitulo);
strTitulo.innerText = "Este titulo lo creee desde js"

document.getElementById("btnInicio").disabled=true;

document.getElementById("imgBarbatos").src="https://static.wikia.nocookie.net/gundam/images/1/10/Gandam.png/revision/latest?cb=20150423073909&path-prefix=es"

document.getElementById("strTitulo").addEventListener("mouseover", (event)=>{
    console.log(event.srcElement)

    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.srcElement.style.color = `#${randomColor}`;
});