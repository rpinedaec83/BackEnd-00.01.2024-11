const listaDeIMEIBloqueados = ['', '987654321', '555444777','876564634']
 
class Telefono {
  constructor(serie, imei, marca) {
    this.serie = serie;
    this.imei = imei;
    this.marca = marca;
    this.bloqueado = false;
    this.diagnostico = null;
    this.estado = 'Ingresado';
    this.repuestos = [];
  }
 
  verificarImei() {
    if(listaDeIMEIBloqueados.includes(this.imei)) {
      return this.bloqueado = true
    }
  }
 
  agregarDiagnostico(diagnostico) {
    this.diagnostico = diagnostico;
    this.estado = 'Diagnosticado'
  }
 
  cambioEstado(nuevoEstado) {
    this.estado = nuevoEstado;
  }
 
  agregarRepuestos(repuesto) {
    this.repuestos.push(repuesto)
  }
}
 
class Tecnico {
  constructor(nombre, habilidades) {
    this.nombre = nombre;
    this.habilidades = habilidades;
  }
 
  puedeReparar(marca) {
    return this.habilidades.includes(marca)
  }
}
 
class Reparacion {
  constructor(telefono, usuario, abono) {
    this.telefono = telefono;
    this.usuario = usuario;
    this.abono = abono;
    this.estado = 'Pendiente de abono o el telefono esta bloqueado';
  }
 
  autorizar() {
    if(this.abono >= 50 && this.telefono.bloqueado === false) {
      this.estado = 'Autorizado y el telefono no esta bloqueado';
    }
  }
 
  asignarTecnico(tecnicos) {
    const tecnico = tecnicos.find(tecnico => tecnico.puedeReparar(this.telefono.marca))
    if(tecnico) {
      console.log(`Reparacion asignada al tecnico: ${tecnico.nombre}`)
    } else {
      console.log('No hay un tecnico con los skill para esta reparacion')
    }
  }
}
 
const tecnico1 = new Tecnico('Juan', ['SAMSUNG', 'APPEL', 'HONOR'])
const tecnico2 = new Tecnico('Pedro', ['HONOR', 'HUAWEI'])
 
const telefono = new Telefono('123ABC', '999888777', 'HUAWEI')
telefono.agregarDiagnostico('Pantalla rota')
telefono.verificarImei()
 
const reparacion = new Reparacion(telefono, 'Luis', 50)
reparacion.autorizar();
 
console.log(reparacion.asignarTecnico([tecnico1, tecnico2]))
 
telefono.agregarRepuestos('pantalla nueva')
telefono.cambioEstado('Reparacion esta en curso')
 
console.log(telefono);
console.log(reparacion);