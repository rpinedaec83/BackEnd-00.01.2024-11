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
        $("#btnReservar").on("click", function(e){
            e.preventDefault();
            console.log("Hizo click en reservar");
            
        })
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