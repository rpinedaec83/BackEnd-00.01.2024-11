//class

//Quiero un programa que administre un local comercial de electrodomesticos


//Abstraccion
// tv marca:sony, lg, 
class Television{
    constructor(serie, marca, modelo, tamaño, precio, fechaCompra, entradas, formato, sistemaOperativo, conectividad, salidas){
        this.serie = serie;
        this.marca = marca;
        this.modelo= modelo;
        this.tamaño = tamaño;
        this.precio = precio;
        this.fechaCompra = fechaCompra;
        this.entradas = entradas;
        this.formato = formato;
        this.sistemaOperativo = sistemaOperativo;
        this.conectividad =conectividad;
        this.salidas = salidas
    }
    // reproducirVideo(){

    // }
    encender(){
        console.log(`La television ${this.marca} - ${this.modelo} se esta encendiendo`);

    }
    apagar(){
        console.log(`La television ${this.marca} - ${this.modelo} se esta apagando`);
        
    }
    cambiarCanal(numCanal){
        let index = this.entradas.indexOf("CABLE");
        console.log(index);
        if(index>0){
            console.log(`La television ${this.marca} - ${this.modelo} esta mostrando el canal ${numCanal}`);

        }
        else{
            console.log(`La television ${this.marca} - ${this.modelo} no puede ejecutar la accion`);

        }
    }
    cambiarVolumen(nivel){
        this.salidas.forEach(element => {
            console.log(`La television ${this.marca} - ${this.modelo} esta reproduciendo en ${element} al nivel ${nivel}`)
        });
    }
}

let tv1 = new Television("SR0001","Sony","Bravia",70,1500,"2024-12-17",["HDMI","BT"], "4k", "GoogleTV",["WiFi"],["BT", "Optica","Parlantes"]);

console.log(tv1);
let tv2 = new Television("SR0002", "LG", "Nano",55,1200,"2024-12-17",["HDMI","CABLE","BT"],"Full HD","WebOS",["LAN", "WiFi"],["BT","Parlantes"]);

console.log(tv2.entradas)

tv2.entradas.forEach(element => {
    console.log(element)
});

console.log(tv2.formato)
console.log(tv2.sistemaOperativo)

console.log(tv1.conectividad);
console.log(tv2.conectividad);

tv1.encender();

tv2.apagar();

tv1.cambiarCanal(5);

tv2.cambiarCanal(6);


tv1.cambiarVolumen(8);

tv2.cambiarVolumen(4);