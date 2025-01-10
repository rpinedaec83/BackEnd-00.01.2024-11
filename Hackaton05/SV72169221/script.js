const listaDeIMEIBloqueados = ['159753654', '888555999','123075412'];
const listaDeSerieBloqueados=[`12345678910`,`987765432198`,`67890123457`];

class Reparacion{
    constructor(usuario,Celular,tecnico,abono){
        this.usuario=usuario;
        this.tecnico=tecnico;
        this.Celular=Celular;
        this.abono=abono;
    }
    iniciarReparacion(){
        console.log(`Inicio de la reparación del cliente ${this.usuario.nombre}`)
        if(listaDeSerieBloqueados.includes(this.Celular.serie)||listaDeIMEIBloqueados.includes(this.Celular.imei)){
            console.log(`La reparación del cliente ${this.usuario.nombre} no podrá ejecutarse, el imei o serie pertenecen a un celular robado`)
        }
        else{
            for (let i = 0; i < this.tecnico.length; i++) {
                if(this.tecnico[i].skills.includes(this.Celular.marca)){//Asignando un tecnico a la reparación según la marca del celular del cliente
                    this.tecnico=this.tecnico[i];
                    console.log(`Se asignó al técnico ${this.tecnico.nombre} a la reparacion`);
                }
                
            }
            let problemas=["Pantalla rota","Bateria mala","Transmisor dañado","Desactualizado","Circuito dañado",null]
            let problema=problemas[Math.trunc(Math.random()*6)]//Asignando un problema 
            console.log(`El tecnico ${this.tecnico.nombre} reportó el problema :${problema}`);
            if(problema==null){
                console.log(`El celular ${this.Celular.marca} del cliente ${this.usuario.nombre} no necesita reparacion`)
            }
            else{
                console.log(`El celular ${this.Celular.marca} del cliente ${this.usuario.nombre} pasó el primer diagnóstico`)
                let repuestos=["Pantalla nueva","Nueva bateria","Nuevo transmisor","Nuevo driver","Nuevo circuito"];
                let costos=[200,85,250,230,60];
                let costo=costos[problemas.indexOf(problema)];
                let repuesto=repuestos[problemas.indexOf(problema)];
                console.log(`El técnico agregó el costo del repuesto: ${repuesto}, el costo a pagar serían ${costo}`);
                if(this.abono<(costo/2)){
                    console.log(`El cliente no podrá continuar con la reparación, el cliente abonó ${this.abono} y el costo es ${costo}`);

                }
                else{
                    console.log(`El cliente si podrá continuar con la reparación, el cliente abonó ${this.abono} y el costo de la reparación mas el repuesto es ${costo}`);
                }


            }



        }


    }




}





class Celular {
  constructor(serie, imei, marca) {
    this.serie = serie;
    this.imei = imei;
    this.marca = marca;
    this.bloqueado = false;
  }
  
  imeiBloqueado(){
    if(listaDeIMEIBloqueados.includes(this.imei)){
        this.bloqueado=true;
    }
  }
  
}



class Tecnico{
    constructor(nombre,...skills){
        this.nombre=nombre;
        this.skills=skills;
    }
}

class Usuario{
    constructor(nombre){
        this.nombre=nombre;
    }
}


const Usuario1=new Usuario("Miguel");
const Usuario2=new Usuario("Paolo");
const Usuario3=new Usuario("Nick")


const Celular1=new Celular(`987765432198`,'159753654',"Android")
const Celular2=new Celular(`987765432195`,'159753754',"Huawei")
const Celular3=new Celular(`987765432105`,'159753854',"Apple")

const Tecnico1=new Tecnico("Pedro","Android","Huawei");
const Tecnico2=new Tecnico("Moises","Xiaomi");
const Tecnico3=new Tecnico("Nicole","Apple","Sony")

let tecnicos=[Tecnico1,Tecnico2,Tecnico3];

const reparacion1=new Reparacion(Usuario1,Celular1,tecnicos,210);
const reparacion2=new Reparacion(Usuario2,Celular2,tecnicos,30);
const reparacion3=new Reparacion(Usuario3,Celular3,tecnicos,105)

reparacion1.iniciarReparacion();
reparacion2.iniciarReparacion();
reparacion3.iniciarReparacion();

 
