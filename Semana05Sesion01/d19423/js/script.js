//class

//Quiero un programa que administre un local comercial de electrodomesticos


class Electrodomestico{
    #costo = 0;
    constructor(serie, marca, modelo,conectividad, precio, fechaCompra){
        this.serie = serie;
        this.marca = marca;
        this.modelo= modelo;
        this.conectividad = conectividad;
        this.precio = precio;
        this.fechaCompra = fechaCompra;
    }
    getCosto(acceso){
        if(acceso==="admin")
            return this.#costo;
        else
            return "No tienes el nivel de acceso para saber el costo"
    }
    setCosto(nuevoCosto){
        this.#costo = nuevoCosto;
    }

    encender(){
        console.log(`El electrodomestico ${this.marca} - ${this.modelo} se esta encendiendo`);

    }
    apagar(){
        console.log(`El electrodomestico ${this.marca} - ${this.modelo} se esta apagando`);
        
    }
    conectarAlInternet(dispositivo){
        this.conectividad.forEach(element => {
            if(element.tipo === dispositivo){
                element.isActivo = true;
                console.log(`El dispositivo de conectividad ${element.tipo} se ha activado`);
            }
            else{
                element.isActivo = false;
                console.log(`El dispositivo de conectividad ${element.tipo} se ha desactivado`);
            }
        });
    }
    mostrarJSON(){
        return JSON.stringify(this);
    }
}

class LineaMarron extends Electrodomestico{
    constructor(serie, marca, modelo,conectividad, precio, fechaCompra, entradas, salidas){
        super(serie, marca, modelo,conectividad, precio, fechaCompra);
        this.entradas = entradas;
        this.salidas = salidas;
    }
    cambiarEntrada(entrada){
        this.entradas.forEach(element=>{
            if(element.tipo === entrada){
                element.isActivo = true;
                console.log(`El dispositivo de entrada ${element.tipo} se ha activado`);
            }
            else{
                element.isActivo = false;
                console.log(`El dispositivo de entrada ${element.tipo} se ha desactivado`);
            }
        })

    }
    cambiarSalida(salida){
        this.salidas.forEach(element=>{
            if(element.tipo === salida){
                element.isActivo = true;
                console.log(`El dispositivo de salida ${element.tipo} se ha activado`);
            }
            else{
                element.isActivo = false;
                console.log(`El dispositivo de salida ${element.tipo} se ha desactivado`);
            }
        })
    }
    cambiarVolumen(nivel){
        this.salidas.forEach(element=>{
            if(element.isActivo){
                console.log(`El dispositivo de salida ${element.tipo} se ha configurado al nivel ${nivel}` );
            }
        })
    }
}


//Abstraccion
// tv marca:sony, lg, 
class Television extends LineaMarron{
  
    constructor( serie, marca, modelo,conectividad, precio, fechaCompra, entradas, salidas,tamaño, formato, sistemaOperativo){
        super(serie, marca, modelo,conectividad, precio, fechaCompra, entradas, salidas);
        this.formato = formato;
        this.tamaño = tamaño;
        this.sistemaOperativo = sistemaOperativo;
    }
    
    cambiarCanal(numCanal){
        let exito =false;
        this.entradas.forEach(element =>{
            if(element.isActivo && element.tipo === "CABLE"){
                console.log(`La television ${this.marca} - ${this.modelo} esta mostrando el canal ${numCanal}`);
                exito = true;
            }
        })
        if(!exito){
            console.log(`La television ${this.marca} - ${this.modelo} no puede ejecutar la accion`);
        }
    }
    
}

// let tv1 = new Television("SR0001","Sony","Bravia",70,1500,"2024-12-17",["HDMI","BT"], "4k", "GoogleTV",["WiFi"],["BT", "Optica","Parlantes"]);

// console.log(tv1);
// let tv2 = new Television("SR0002", "LG", "Nano",55,1200,"2024-12-17",["HDMI","CABLE","BT"],"Full HD","WebOS",["LAN", "WiFi"],["BT","Parlantes"]);

// console.log(tv2.entradas)

// tv2.entradas.forEach(element => {
//     console.log(element)
// });

// console.log(tv2.formato)
// console.log(tv2.sistemaOperativo)

// console.log(tv1.conectividad);
// console.log(tv2.conectividad);

// tv1.encender();

// tv2.apagar();

// tv1.cambiarCanal(5);

// tv2.cambiarCanal(6);


// tv1.cambiarVolumen(8);

// tv2.cambiarVolumen(4);

// console.log(tv2.getCosto("dsa"));

class Dispositivo{
    constructor(tipo,isActivo=false){
        this.tipo = tipo;
        this.isActivo = isActivo
    }
    
}

let tv1 = new Television("SW003","Sony", "Bravia", 
    [new Dispositivo("WiFi"),new Dispositivo("LAN")],2000,'2024-12-17', 
    [new Dispositivo("HDMI"),new Dispositivo("CABLE"),new Dispositivo("BT")],
    [new Dispositivo("Parlantes Integrados"), new Dispositivo("BT")],50,"4K","GoogleTV");

console.log(tv1);

console.log(tv1.mostrarJSON());

tv1.conectarAlInternet("WiFi");

tv1.cambiarEntrada("CABLE");
tv1.cambiarSalida("BT");
tv1.cambiarVolumen(10);
tv1.cambiarCanal(10);
// console.log(tv1.mostrarJSON());