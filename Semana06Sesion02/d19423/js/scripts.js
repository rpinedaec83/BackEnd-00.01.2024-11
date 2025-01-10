let addKit = document.getElementById("addKit");

let arrKit = [];
let $table = $("#table");

const KitStore = function(){
    objStorage = localStorage.getItem("kits");
    if(objStorage != null){
        arrKit = JSON.parse(objStorage);
    }
    console.log(arrKit)
    $table.bootstrapTable();
    $table.bootstrapTable('load',arrKit);
}();

addKit.addEventListener("click",  async (e) => {
    e.preventDefault();
    console.log("Se hizo click en addClick");

    await pedirDatos().then((data)=>{
        console.log(data);
        arrKit.push(data);
        localStorage.setItem("kits",JSON.stringify(arrKit));
        $table.bootstrapTable('load',arrKit);
    });

})

class Kit{
    constructor(nombre, descripcion, imagen, escala, isCustom = false, custom = ""){
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.escala = escala;
        this.isCustom = isCustom;
        this.custom = custom
    }
}

async function pedirDatos(){
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
            return {
                nombre: $("#nombre").val(),
                descripcion: $("#descripcion").val(),
                imagen: $("#imagen").val(),
                escala:$("#escala").val(),
                isCustom:$("#isCustom").val(),
                custom:$("#custom").val()

            }
        }
    });

    if (formValues) {
        let kit = new Kit(formValues.nombre,formValues.descripcion, formValues.imagen, formValues.escala, formValues.isCustom, formValues.custom);
       return kit;
    }
}