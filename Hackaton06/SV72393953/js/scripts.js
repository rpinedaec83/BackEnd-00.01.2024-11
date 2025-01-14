

let datos = [];


const Inicio = function () {
    let ciudad = "";

    
    function ver() {
        $("#ciudad").text(ciudad);
    }

   
    function evento() {
        $("#btnIniciar").on("click", iniciar);
    }


   

    
    async function iniciar(e) {
        console.log("Iniciando sistema");
        
        e.preventDefault();
        
        var informacion = document.getElementById('informacionReparacion');
        informacion.style.display = 'none';

        

       
        const { value: formValues } = await Swal.fire({
            title: "Ingresa datos",
            icon: "info",
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: "Guardar",
            cancelButtonText: "Cancelar",
            html: `
                <div class="form-group">
                    <input id="numeroCelular" name="numeroCelular" type="text" placeholder="Escribe numero de celular" class="form-control input-md">
                </div>
                <div class="form-group">
                    <input id="IMEI" name="IMEI" type="text" placeholder="Escribe IMEI" class="form-control input-md">
                </div>
                <div class="form-group">
                    <input id="sistemaOperativo" name="sistemaOperativo" type="text" placeholder="Escribe Sistema Operativo" class="form-control input-md">
                </div>
            `,
            preConfirm: () => ({
                numeroCelular: $("#numeroCelular").val(),
                IMEI: $("#IMEI").val(),
                sistemaOperativo: $("#sistemaOperativo").val(),
            })
        });

        console.log(formValues);
     
        localStorage.setItem("formValues", JSON.stringify(formValues));
        datos.push(formValues);

        console.log(datos);
        localStorage.setItem("formValues", JSON.stringify(datos));


            
       
        if (celularesRobados.includes(formValues.numeroCelular)) {
            console.log("NO Habilitado");
            Swal.fire({
                title: "Numero de celular reportado como robado",
                icon: "info",
                showCloseButton: true,
            });
        } else {
            
            console.log("Habilitado");
            manejarTecnicos(formValues);
            var tecnicos = document.getElementById('mostrar');
            tecnicos.style.display = 'block';
        }
    }

 
    function manejarTecnicos(formValues) {
        let tecnicosFiltrados;
        let sistema = formValues.sistemaOperativo;

        if (sistema === "Android") {
            tecnicosFiltrados = tecnicos.filter(tecnico => tecnico.especialidad === "Android");
        } else if (sistema === "IOS") {
            tecnicosFiltrados = tecnicos.filter(tecnico => tecnico.especialidad === "IOS");
        } else {
            console.log("No disponible");
            document.getElementById("mostrar").innerHTML = "No disponible";
            return;
        }

        mostrarTecnicos(tecnicosFiltrados, formValues);
    }

   
    function mostrarTecnicos(tecnicosFiltrados, formValues) {
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
                <tbody></tbody>
            </table>
        `;

        const tbody = document.querySelector("#tablaTecnicos tbody");

        tecnicosFiltrados.forEach(tecnico => {
            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${tecnico.nombre}</td>
                <td>${tecnico.apellido}</td>
                <td>${tecnico.especialidad}</td>
                <td><button class="elegir-btn">Elegir</button></td>
            `;

            const botonElegir = tr.querySelector(".elegir-btn");
            botonElegir.addEventListener("click", () => {
                Swal.fire({
                    title: "Información del proceso de reparación",
                    html: crearFormularioReparacion(formValues, tecnico),
                    icon: "info",
                    showCloseButton: true,
                    confirmButtonText: "Confirmar reparación",
                    preConfirm: () => {
                        mostrarInformacionReparacion(formValues, tecnico);
                    }
                });
            });

            tbody.appendChild(tr);
        });
    }

    
    function crearFormularioReparacion(formValues, tecnico) {
        return `
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
        `;
    }

   
    function mostrarInformacionReparacion(formValues, tecnico) {
        const comentario = document.getElementById('formComentario').value;
        const autorizacion = document.getElementById('autorizacion').value;
        const servicio = document.getElementById('servicio').value;
        const respuesto = document.getElementById('respuesto').value;

        document.getElementById('infoNumeroCelular').textContent = formValues.numeroCelular;
        document.getElementById('infoIMEI').textContent = formValues.IMEI;
        document.getElementById('infoSO').textContent = formValues.sistemaOperativo;
        document.getElementById('infoTecnico').textContent = `${tecnico.nombre} ${tecnico.apellido}`;
        document.getElementById('infoComentario').textContent = comentario;
        document.getElementById('infoautorizacion').textContent = autorizacion;
        document.getElementById('infoservicio').textContent = servicio;
        document.getElementById('inforepuesto').textContent = respuesto;

        document.getElementById('informacionReparacion').style.display = 'block';
    }

    
    return {
        init: function(parametros) {
            ciudad = parametros.ciudad;
            console.log(parametros);
            ver();
            evento();
        }
    }
}();


class Tecnico {
    constructor(nombre, apellido, especialidad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.especialidad = especialidad;
    }

    mostrar() {
        
        switch (this.especialidad) {
            case "Android":
                let tecnicosAndroid = tecnicos.filter(tecnico => tecnico.especialidad === "Android");
                console.log(tecnicosAndroid);
                break;
            case "IOS":
                let tecnicosIOS = tecnicos.filter(tecnico => tecnico.especialidad === "IOS");
                console.log(tecnicosIOS);
                break;
            default:
                console.log("No disponible");
                break;
        }
    }
}


let tecnico1 = new Tecnico("Luis", "Perez", "IOS");
let tecnico2 = new Tecnico("Marcos", "Centurion", "IOS");
let tecnico3 = new Tecnico("Christopher", "Perez", "Android");
let tecnico4 = new Tecnico("Sergio", "Perez", "IOS");
let tecnico5 = new Tecnico("Luis", "Sanchez", "Android");
let tecnico6 = new Tecnico("Alfredo", "Perez", "IOS");

let tecnicos = [tecnico1, tecnico2, tecnico3, tecnico4, tecnico5, tecnico6];




document.getElementById('btnCerrar').addEventListener('click', function(e) {
    e.preventDefault();
    localStorage.clear();
    var tecnicos = document.getElementById('mostrar');
    var informacion = document.getElementById('informacionReparacion');
    tecnicos.style.display = 'none';
    informacion.style.display = 'none';
    datos.length = 0;
});


let celularesRobados = [
    "920536260", "920536261", "920536262", "920536263", "920536264", "920536265",
    "920536266", "920536267", "920536268", "920536269"
];





