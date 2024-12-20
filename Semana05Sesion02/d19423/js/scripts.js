const Reserva = function () //a
{
    let empresa = "";
    let ciudad ="";

    function configurar(){
        // document.getElementById("empresa").innerText = empresa ;
        $("#empresa").text(empresa);
        $("#ciudad").text(ciudad);
    }

    function eventos(){
        $("#btnReservar").on("click", reservar)
    }

   async function reservar(e){
        console.log("Inicia el proceso de reserva");
        e.preventDefault();
        $("#divReserva").hide();
        
        const {value: formValues}= await Swal.fire({
            title: "Ingresa tus datos",
            icon: "info",
            showCloseButton:true,
            showCancelButton:true,
            confirmButtonText: "Guardar",
            denyButtonText: "Cancelar",
            html: `<!-- Text input-->
<div class="form-group">
  <div >
  <input id="origen" name="origen" type="text" placeholder="Escribe el origen del vuelo" class="form-control input-md">
  <span class="help-block">Escribe el origen del vuelo</span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <div >
  <input id="destino" name="destino" type="text" placeholder="Escribe el destino de tu vuelo " class="form-control input-md">
  <span class="help-block">Escribe el destino de tu vuelo </span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <div >
  <input id="fechaIda" name="fechaIda" type="text" placeholder="Escribe la Fecha de Ida" class="form-control input-md">
  <span class="help-block">Escribe la Fecha de Ida</span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <div >
  <input id="fechaVuelta" name="fechaVuelta" type="text" placeholder="Escribe la fecha de retorno" class="form-control input-md">
  <span class="help-block">Escribe la fecha de retorno</span>  
  </div>
</div>`,
            preConfirm:()=>{
                return {
                    origen: $("#origen").val(),
                    destino: $("#destino").val(),
                    fechaIda: $("#fechaIda").val(),
                    fechaVuelta: $("#fechaVuelta").val()
                }
            }
        });

        if(formValues){
            console.log(formValues);
        }
    }


    return {
        init: function(parametros){
            empresa = parametros.nombre;
            ciudad = parametros.ciudad;
            console.log(parametros);
            configurar();
            eventos();
        }
    }
}();


class Aviones{
    constructor(matricula, modelo, nroAsientos, capacidadMinima,costoVuelo){
        this.matricula = matricula;
        this.modelo = modelo;
        this.nroAsientos = nroAsientos;
        this.capacidadMinima = capacidadMinima;
        this.costoVuelo = costoVuelo;

        this.arrPasajeros = [];
        this.habilitado = false;
        this.reservado = 0;
    }

    agregarPasajeros(pasajero){
        if(this.reservado>= this.capacidadMinima){
            this.habilitado = true;
        }
        this.arrPasajeros.push(pasajero);
        this.reservado++;
    }
}

class Pasajeros{
    constructor(nombres, apellidos, documento){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.documento = documento; 
    }
}

class Reservas{
    constructor(origen, destino, fechaIda, fechaVuelta){
        this.origen = origen;
        this.destino = destino;
        this.fechaIda = fechaIda;
        this.fechaVuelta = fechaVuelta;

        this.avionIda = null;
        this.avionVuelta =null;
    }

    asignarAvionIda(avionIda) {
        this.avionIda = avionIda;
    }

    asignarAvionVuelta(avionVuelta){
        this.avionVuelta = avionVuelta;
    }
}