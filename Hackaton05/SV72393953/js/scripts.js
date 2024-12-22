const Inicio = function () 
{
    
    let ciudad ="";

    function ver(){ 
        $("#ciudad").text(ciudad);
    }

    function evento(){
        $("#btnIniciar").on("click", iniciar)
    }

   async function iniciar(e){
        console.log("Iniciando sistema");
        e.preventDefault();
        
        
        const {value: formValues}= await Swal.fire({
            title: "Ingresa datos",
            icon: "info",
            showCloseButton:true,
            showCancelButton:true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
            html: `<!-- Text input-->
<div class="form-group">
  <div >
  <input id="numeroCelular" name="numeroCelular" type="text" placeholder="Escribe numero de celular" class="form-control input-md">  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <div >
  <input id="IMEI" name="IMEI" type="text" placeholder="Escribe IMEI" class="form-control input-md"> 
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <div >
  <input id="sistemaOperativo" name="sistemaOperativo" type="text" placeholder="Escribe Sistema Operativo" class="form-control input-md">
  </div>
</div>
</div>`,
            preConfirm:()=>{
                return {
                    numeroCelular: $("#numeroCelular").val(),
                    IMEI: $("#IMEI").val(),
                    sistemaOperativo: $("#sistemaOperativo").val(),
                }
            }
        });

        

        if (celularesRobados.includes(formValues.numeroCelular)) {
            console.log("NO Habilitado")
            Swal.fire({
            title: "Numero de celular reportado como robado",
            icon: "info",
            showCloseButton:true,
           
              });
        }else{
            console.log("Habilitado")
            
            switch(formValues.sistemaOperativo){
                case "Android":
                    let tecnicosAndroid = tecnicos.filter(tecnico => tecnico.especialidad === "Android");
                    console.log(tecnicosAndroid);
                    //document.getElementById("mostrar").innerHTML = "Android";
                    document.getElementById("mostrar").innerHTML = `
                     <h2>Especialistas</h2>
                    <table border="1" id="tablaTecnicos">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Especialidad</th>
                                <th>Elegir</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Los técnicos filtrados aparecerán aquí -->
                        </tbody>
                    </table>
                `;
        
                // Obtener el cuerpo de la tabla
                const tbody = document.querySelector("#tablaTecnicos tbody");
        
                // Insertar los datos de los técnicos en las filas de la tabla
                tecnicosAndroid.forEach(tecnico => {
                    const tr = document.createElement("tr");
        
                    // Crear celdas para cada propiedad del técnico
                    const tdNombre = document.createElement("td");
                    tdNombre.textContent = tecnico.nombre;
        
                    const tdApellido = document.createElement("td");
                    tdApellido.textContent = tecnico.apellido;
        
                    const tdEspecialidad = document.createElement("td");
                    tdEspecialidad.textContent = tecnico.especialidad;
        
                    const celdaBoton = document.createElement('td');
                    const botonElegir = document.createElement('button');
                    botonElegir.textContent = 'Elegir';
                    botonElegir.classList.add('elegir-btn');
                    botonElegir.addEventListener('click', () => {
                        Swal.fire({
                            title: "Información del proceso de reparación",
                            html: `
                                <p>Numero de celular: ${formValues.numeroCelular}</p>
                                <p>IMEI: ${formValues.IMEI}</p>
                                <p>Sistema Operativo: ${formValues.sistemaOperativo}</p>
                                <p>Especialista asignado: ${tecnico.nombre} ${tecnico.apellido}</p>
                                <hr>
                                <label for="formComentario">Diagnostico:</label>
                                <textarea id="formComentario" rows="4" style="width: 100%;"></textarea>
                                <label for="autorizacion">¿ Tiene autorizacion por parte del usuario?</label>
                                <textarea id="autorizacion" rows="4" style="width: 100%;"></textarea>
                                <label for="servicio">¿ Abono al menos el 50% del servicio ?</label>
                                <textarea id="servicio" rows="4" style="width: 100%;"></textarea>
                                <label for="respuesto">¿ Que repuestos necesita ?</label>
                                <textarea id="respuesto" rows="4" style="width: 100%;"></textarea>
                            `,
                            icon: "info",
                            showCloseButton: true,
                            confirmButtonText: "Confirmar reparación",
                            preConfirm: () => {
                                // Obtener los valores ingresados en el formulario
                                const comentario = document.getElementById('formComentario').value;
                                const autorizacion = document.getElementById('autorizacion').value;
                                const servicio = document.getElementById('servicio').value;
                                const respuesto = document.getElementById('respuesto').value;
                    
                                // Mostrar los datos en la pantalla
                                document.getElementById('infoNumeroCelular').textContent = formValues.numeroCelular;
                                document.getElementById('infoIMEI').textContent = formValues.IMEI;
                                document.getElementById('infoSO').textContent = formValues.sistemaOperativo;
                                document.getElementById('infoTecnico').textContent = `${tecnico.nombre} ${tecnico.apellido}`;
                                document.getElementById('infoComentario').textContent = comentario;
                                document.getElementById('infoautorizacion').textContent = autorizacion;
                                document.getElementById('infoservicio').textContent = servicio;
                                document.getElementById('inforepuesto').textContent = respuesto;
                    
                                // Hacer visible la sección donde se muestran los datos
                                document.getElementById('informacionReparacion').style.display = 'block';
                            }
                        });
                    });
                    

                    celdaBoton.appendChild(botonElegir);
        
                    // Añadir las celdas a la fila
                    tr.appendChild(tdNombre);
                    tr.appendChild(tdApellido);
                    tr.appendChild(tdEspecialidad);
                    tr.appendChild(celdaBoton);
        
                    // Añadir la fila al cuerpo de la tabla
                    tbody.appendChild(tr);
                });;
                    // mostrarTabla();
                    break;
                case "IOS":
                    let tecnicosIOS = tecnicos.filter(tecnico => tecnico.especialidad === "IOS");
                    console.log(tecnicosIOS);
                    //document.getElementById("mostrar").innerHTML = "IOS";
                    document.getElementById("mostrar").innerHTML = `
                     <h2>Especialistas</h2>
                    <table border="1" id="tablaTecnicos">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Especialidad</th>
                                <th>Elegir</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Los técnicos filtrados aparecerán aquí -->
                        </tbody>
                    </table>
                `;
        
                // Obtener el cuerpo de la tabla
                const tbody2 = document.querySelector("#tablaTecnicos tbody");
        
                // Insertar los datos de los técnicos en las filas de la tabla
                tecnicosIOS.forEach(tecnico => {
                    const tr = document.createElement("tr");
        
                    // Crear celdas para cada propiedad del técnico
                    const tdNombre = document.createElement("td");
                    tdNombre.textContent = tecnico.nombre;
        
                    const tdApellido = document.createElement("td");
                    tdApellido.textContent = tecnico.apellido;
        
                    const tdEspecialidad = document.createElement("td");
                    tdEspecialidad.textContent = tecnico.especialidad;

                    const celdaBoton = document.createElement('td');
                    const botonElegir = document.createElement('button');
                    botonElegir.textContent = 'Elegir';
                    botonElegir.classList.add('elegir-btn');
                    botonElegir.addEventListener('click', () => {
                        Swal.fire({
                            title: "Información del proceso de reparación",
                            html: `
                                <p>Numero de celular: ${formValues.numeroCelular}</p>
                                <p>IMEI: ${formValues.IMEI}</p>
                                <p>Sistema Operativo: ${formValues.sistemaOperativo}</p>
                                <p>Especialista asignado: ${tecnico.nombre} ${tecnico.apellido}</p>
                                <hr>
                                <label for="formComentario">Diagnostico:</label>
                                <textarea id="formComentario" rows="4" style="width: 100%;"></textarea>
                                <label for="autorizacion">¿ Tiene autorizacion por parte del usuario?</label>
                                <textarea id="autorizacion" rows="4" style="width: 100%;"></textarea>
                                <label for="servicio">¿ Abono al menos el 50% del servicio ?</label>
                                <textarea id="servicio" rows="4" style="width: 100%;"></textarea>
                                <label for="respuesto">¿ Que repuestos necesita ?</label>
                                <textarea id="respuesto" rows="4" style="width: 100%;"></textarea>
                            `,
                            icon: "info",
                            showCloseButton: true,
                            confirmButtonText: "Confirmar reparación",
                            preConfirm: () => {
                                // Obtener los valores ingresados en el formulario
                                const comentario = document.getElementById('formComentario').value;
                                const autorizacion = document.getElementById('autorizacion').value;
                                const servicio = document.getElementById('servicio').value;
                                const respuesto = document.getElementById('respuesto').value;
                    
                                // Mostrar los datos en la pantalla
                                document.getElementById('infoNumeroCelular').textContent = formValues.numeroCelular;
                                document.getElementById('infoIMEI').textContent = formValues.IMEI;
                                document.getElementById('infoSO').textContent = formValues.sistemaOperativo;
                                document.getElementById('infoTecnico').textContent = `${tecnico.nombre} ${tecnico.apellido}`;
                                document.getElementById('infoComentario').textContent = comentario;
                                document.getElementById('infoautorizacion').textContent = autorizacion;
                                document.getElementById('infoservicio').textContent = servicio;
                                document.getElementById('inforepuesto').textContent = respuesto;
                    
                                // Hacer visible la sección donde se muestran los datos
                                document.getElementById('informacionReparacion').style.display = 'block';
                            }
                        });
                    });
                    

                    celdaBoton.appendChild(botonElegir);
        
                    // Añadir las celdas a la fila
                    tr.appendChild(tdNombre);
                    tr.appendChild(tdApellido);
                    tr.appendChild(tdEspecialidad);
                    tr.appendChild(celdaBoton);
        
                    // Añadir la fila al cuerpo de la tabla
                    tbody2.appendChild(tr);
                });;

                

                    break;
                default:
                    console.log("No disponible");
                    document.getElementById("mostrar").innerHTML = "No disponible";
                    break;
            }
            
            
        }
    }


    return {
        init: function(parametros){
            ciudad = parametros.ciudad;
            console.log(parametros);
            ver();
            evento();
        }
    }
}();


/* let tecnicos={
     tecnico1:["Luis","Perez","IOS"],
     tecnico2:["Marcos","Centurion","IOS"],
     tecnico3:["Christopher","Perez","Android"],
     tecnico4:["Sergio","Perez","IOS"],
     tecnico5:["Luis","Sanchez","Android"],
     tecnico6:["Alfredo","Perez","IOS"]
}
console.log(tecnicos); */

class Tecnico{
    constructor(nombre,apellido,especialidad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.especialidad=especialidad;
    }

    mostrar(){
       switch(this.especialidad){
        case "Android":
             let tecnicosAndroid = tecnicos.filter(tecnico => tecnico.especialidad === "Android");
            console.log(tecnicosAndroid);
            document.getElementById("mostrar").innerHTML = "Hello World!";
            //console.log("Es Android");
            break;
        case "IOS":
            let tecnicosIOS = tecnicos.filter(tecnico => tecnico.especialidad === "IOS");
             console.log(tecnicosIOS);
            //console.log("Es IOS");
            break;
        default:
            console.log("No disponible");
            break;        
       }
    }
}

let tecnico1=new Tecnico("Luis","Perez","IOS");
let tecnico2=new Tecnico("Marcos","Centurion","IOS");
let tecnico3=new Tecnico("Christopher","Perez","Android");
let tecnico4=new Tecnico("Sergio","Perez","IOS");
let tecnico5=new Tecnico("Luis","Sanchez","Android");
let tecnico6=new Tecnico("Alfredo","Perez","IOS");

let tecnicos = [tecnico1, tecnico2, tecnico3, tecnico4, tecnico5, tecnico6];
//tecnico2.mostrar();
//tecnico5.mostrar();




let celularesRobados=["920536260","920536261","920536262","920536263","920536264","920536265","920536266","920536267","920536268","920536269"];