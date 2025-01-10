let addKit = document.getElementById("addKit");
$("#delAllKits").on("click", (e) => {
    arrKit = [];
    $table.bootstrapTable('load', arrKit);
    localStorage.setItem("kits", JSON.stringify(arrKit));
})
let arrKit = [];
let $table = $("#table");

$table.on("click-row.bs.table", function (row, element, field) {
    dibujarCard(element);
});

function dibujarCard(element) {
    $("#card-header").text(element.nombre)
    strHTML = "";
    strHTML += `<p>${element.descripcion}</p><br>
    <img src="img/${element.imagen}.webp" height="400px"></img> <br>`;

    if (element.isCustom === "SI") {
        let arrCus = element.custom.split(",");
        let strul = `<ul>`
        arrCus.forEach(dt => {
            strul += `<li>${dt}</li>`
            console.log(dt)
        });
        strul += `</ul>`
        strHTML += strul;
    }

    $("#card-body").html(strHTML)

}

window.accionEvents = {
    'click .edit': function (e, value, row, index) {
        editar(row);
    },
    'click .remove': function (e, value, row, index) {
        eliminar(row)
    }
}

async function editar(row) {
    console.log(row)
    console.log("editar")
    const index = arrKit.indexOf(row);

    await pedirDatos(row).then(data => {
        arrKit[index] = data;
        $table.bootstrapTable('load', arrKit);
        localStorage.setItem("kits",JSON.stringify( arrKit));
    })
}
function eliminar(row) {
    console.log(row)
    const index = arrKit.indexOf(row);
    if (index > -1) {
        arrKit.splice(index, 1);
    }
    $table.bootstrapTable('load', arrKit);
    localStorage.setItem("kits", JSON.stringify(arrKit));
}

function accionFormater(value, row, index) {
    return [
        '<a class="edit" href="javascript:void(0)" title="edit">',
        '<i class="fas fa-edit"></i>',
        '<a/>',
        '<a class="remove" href="javascript:void(0)" title="remove">',
        '<i class="fa fa-trash"></i>',
        '<a/>',
    ].join("")
}


const KitStore = function () {
    objStorage = localStorage.getItem("kits");
    if (objStorage != null) {
        arrKit = JSON.parse(objStorage);
    }
    console.log(arrKit)
    $table.bootstrapTable();
    $table.bootstrapTable('load', arrKit);
}();

addKit.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("Se hizo click en addClick");

    await pedirDatos().then((data) => {
        console.log(data);
        arrKit.push(data);
        localStorage.setItem("kits", JSON.stringify(arrKit));
        $table.bootstrapTable('load', arrKit);
    });

})

class Kit {
    constructor(nombre, descripcion, imagen, escala, isCustom = false, custom = "") {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.escala = escala;
        this.isCustom = isCustom;
        this.custom = custom
    }
}

async function pedirDatos(objData= null) {
    const { value: formValues } = await Swal.fire({
        title: "Ingresa los datos de tu Kit",
        icon: "info",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonText: "Guardar",
        denyButtonText: "Cancelar",
        html: `<!-- Text input-->
<div class="form-group">
  <div >
  <input id="nombre" name="nombre" type="text" placeholder="Escribe lo nombre del kit" class="form-control input-md">
  <span class="help-block">Escribe lo nombre del kit</span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <div >
  <input id="descripcion" name="descripcion" type="text" placeholder="Escribe la descripcion del kit " class="form-control input-md">
  <span class="help-block">Escribe la descripcion del kit</span>  
  </div>
</div>

<!-- Text input-->
<div class="form-group">
  <div >
  <input id="imagen" name="imagen" type="text" placeholder="Escribe el nombre de la imagen" class="form-control input-md">
  <span class="help-block">Escribe el nombre de la imagen</span>  
  </div>
</div>

<div class="form-group">
  <div >
  <input id="escala" name="escala" type="text" placeholder="Escribe la escala del kit" class="form-control input-md">
  <span class="help-block">Escribe la escala del kit</span>  
  </div>
</div>

<div class="form-group">
  <div >
  <input id="isCustom" name="isCustom" type="text" placeholder="Le haz hecho custom a tu kit (SI o NO)" class="form-control input-md">
  <span class="help-block">Le haz hecho custom a tu kit</span>  
  </div>
</div>

<div class="form-group">
  <div >
  <input id="custom" name="custom" type="text" placeholder="Que customizacion le haz realizado a tu kit" class="form-control input-md">
  <span class="help-block">Que customizacion le haz realizado a tu kit</span>  
  </div>
</div>

</div>`,
        preConfirm: () => {
            if(objData!=null){
                $("#nombre").val(objData.nombre);
            }
            return {
                nombre: $("#nombre").val(),
                descripcion: $("#descripcion").val(),
                imagen: $("#imagen").val(),
                escala: $("#escala").val(),
                isCustom: $("#isCustom").val(),
                custom: $("#custom").val()

            }
        }
    });

    if (formValues) {
        let kit = new Kit(formValues.nombre, formValues.descripcion, formValues.imagen, formValues.escala, formValues.isCustom, formValues.custom);
        return kit;
    }
}