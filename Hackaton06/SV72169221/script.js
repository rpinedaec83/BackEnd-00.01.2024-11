class Tecnico{
    constructor(nombre,...skills){
        this.nombre=nombre;
        this.skills=skills;
    }
}

let diagnosticos=[];


const Tecnico1=new Tecnico("Pedro","Android","Huawei");
const Tecnico2=new Tecnico("Moises","Xiaomi");
const Tecnico3=new Tecnico("Nicole","Apple","Sony")

let tecnicos=[Tecnico1,Tecnico2,Tecnico3];

sessionStorage.setItem("tecnicos",JSON.stringify(tecnicos))//Se guardó en SessionStorage

let contador=1;



const listaDeIMEIBloqueados = ['159753654', '888555999','123075412'];//9 dígitos
const listaDeSerieBloqueados=[`12345678910`,`987765432198`,`67890123457`];//11 dígitos


let celularLocal=0;
let nUsuario="";
let diagnos="";
if(localStorage.getItem("celular")!=null){
    celularLocal=JSON.parse(localStorage.getItem("celular"));
    nUsuario=JSON.parse(localStorage.getItem("usuario"))
    diagnos=localStorage.getItem("diagnostico")
}
else{
    celularLocal=`null`
    nUsuario=`null`
}


let resumen=`<h1>Reparacion actual</h1>
<h2>Usuario</h2>
<p>Nombre :${nUsuario.nombre}</p>
<h2>Celular</h2>
<p>Marca : ${celularLocal.marca}</p>
<p>Imei: ${celularLocal.imei}</p>
<p>serie: ${celularLocal.serie}</p>
<h2>Diagnostico</h2>
<p>${diagnos}</p>`
document.getElementById(`resu1`).innerHTML=resumen



document.getElementById("enviar").addEventListener("click",(e)=>{
    e.preventDefault();
    const nombre=document.getElementById(`nombre`).value;
    const serie=document.getElementById(`nserie`).value;
    const imei=document.getElementById(`nimei`).value;
    const marca=document.getElementById(`marca`).value;
    const diagnostico=document.getElementById(`diagnostico`).value;



    let celu1= new Celular(serie,imei,marca);
    let usu=new Usuario(nombre);
    let diag=new Diagnóstico(diagnostico);
    diagnosticos.push(diag);
    localStorage.setItem(`diagnostico`,diagnostico)//Se guardó en LocalStorage
    localStorage.setItem(`usuario`,JSON.stringify(usu));//Se guardó en LocalStorage
    contador+=1;
    
    

    if(listaDeSerieBloqueados.includes(celu1.serie)||listaDeIMEIBloqueados.includes(celu1.imei)){
        document.getElementById(`salida`).innerHTML=`<p>El IMEI o serie del celular se encuentra bloqueado</p>`
        celu1.bloqueado=true;
        localStorage.setItem(`celular`,JSON.stringify(celu1));
    }
    else{
        localStorage.setItem(`celular`,JSON.stringify(celu1));
        
        nUsuario=JSON.parse(localStorage.getItem("usuario"))
        celularLocal=JSON.parse(localStorage.getItem("celular"));
        diagnos=localStorage.getItem("diagnostico")
        resumen=`<h1>Reparacion actual</h1>
        <h2>Usuario</h2>
        <p>Nombre :${nUsuario.nombre}</p>
        <h2>Celular</h2>
        <p>Marca : ${celularLocal.marca}</p>
        <p>Imei: ${celularLocal.imei}</p>
        <p>serie: ${celularLocal.serie}</p>
        <h2>Diagnostico</h2>
        <p>${diagnos}</p>`
        document.getElementById(`resu1`).innerHTML=resumen;

        let tecnico=0;
        tecnicos.forEach(element => {
            if (element.skills.includes(marca)){
                tecnico=element.nombre;
            }
            
        });
        
        document.getElementById(`salida`).innerHTML=
            `<p>El tecnico asignado es ${tecnico}</p>
            El telefono ha sido diagnosticado con ${diagnostico}<p>
            El respuesto es ${diag.repuesto()}<p>
            El costo del repuesto es de ${diag.costo()}
            <p>Estimado cliente</p>
            <p>¿Cuanto desea abonar?(Debe abonar mas del 50 porciento de la cantidad para continuar)</p>
            <label for="Abono">Abono</label>
          <input type="text" id="Abono" required>
          <p>¿Desea dar su confirmación?</p>
          </select>
          <label for="Autorizacion">Autorización</label>
          <select id="Autorizacion" required>
            <option value=""></option>
            <option value="si">si</option>
            <option value="no">no</option>
          </select>
          <br><br>
          <button id="enviar2">Enviar</button>`;
        document.getElementById("enviar2").addEventListener("click",(e)=>{
            e.preventDefault();
            const abono=parseFloat(document.getElementById("Abono").value);
            const autorizacion=document.getElementById("Autorizacion").value;

            if(abono<(diag.costo())*0.5 || autorizacion!=="si"){
                document.getElementById(`salida2`).innerHTML=`<p>No se puede realizar el mantenimiento el cliente abonó menos del 50 porciento del costo o no confirmó con "si"</p>`
            }
            else{
                document.getElementById(`salida2`).innerHTML=`<p>El mantenimiento se podrá realizar con normalidad</p>`
            }

            
        })



    }



})

document.getElementById("confirmacion").addEventListener("click",(e)=>{
    e.preventDefault();
    localStorage.clear();
    resumen=`<h1>Reparacion actual</h1>
        <h2>Usuario</h2>
        <p>Nombre :null</p>
        <h2>Celular</h2>
        <p>Marca : null</p>
        <p>Imei: null</p>
        <p>serie: null</p>
        <h2>Diagnostico</h2>
        <p>null</p>`
    document.getElementById(`resu1`).innerHTML=resumen;




})



class Celular {
  constructor(serie, imei, marca) {
    this.serie = serie;
    this.imei = imei;
    this.marca = marca;
    this.bloqueado = false;
  }
  
}





class Usuario{
    constructor(nombre){
        this.nombre=nombre;
    }
}

class Diagnóstico{
    constructor(diagnostico){
        this.diagnostico=diagnostico;
    }
    repuesto(){
        let problemas=[`Pantalla rota`,`Bateria desgastada`,`Transmisor dañado`,`Desactualizacion`,`Circuito dañado`,`Otro`];
        let index=problemas.indexOf(this.diagnostico);
        let repuestos=[`Nueva pantalla`,`Nueva bateria`,`Nuevo transmisor`,`Nuevo software`,`Reparacion de circuito`,`otro`]
        let repuesto=repuestos[index];
        return repuesto
    }

    costo(){
        let problemas=["Pantalla rota","Bateria desgastada","Transmisor dañado","Desactualizacion","Circuito dañado","Otro"];
        let costos=[450,600,200,120,300,60];
        let index=problemas.indexOf(this.diagnostico);
        let costo=costos[index]
        return costo;
    }

}






