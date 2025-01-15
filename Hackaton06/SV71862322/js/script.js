class Telefono {
    constructor(serial, imei) {
      this.serial = serial;
      this.imei = imei;
      this.diagnostico = null;
      this.autorizacionUsuario = false;
      this.abono = 0;
      this.repuestos = [];
      this.estado = 'Ingreso';
    }
  
    agregarDiagnostico(diagnostico) {
      this.diagnostico = diagnostico;
    }
  
    autorizarReparacion(abono) {
      if (abono >= 50) {
        this.autorizacionUsuario = true;
        this.abono = abono;
      } else {
        alert('El abono debe ser al menos el 50% del costo total.');
      }
    }
  
    agregarRepuesto(repuesto) {
      this.repuestos.push(repuesto);
    }
  
    actualizarEstado(estado) {
      this.estado = estado;
    }
  }
  
  class SistemaReparacion {
    constructor() {
      this.telefonos = [];
      this.tecnicos = [];
    }
  
    registrarTelefono(telefono) {
      if (this.verificarTelefono(telefono)) {
        this.telefonos.push(telefono);
        this.actualizarLocalStorage();
        alert('Teléfono registrado exitosamente.');
      } else {
        alert('El número de serie o IMEI ya está reportado.');
      }
    }
  
    verificarTelefono({ serial, imei }) {
      return !this.telefonos.some(t => t.serial === serial || t.imei === imei);
    }
  
    actualizarLocalStorage() {
      localStorage.setItem('telefonos', JSON.stringify(this.telefonos));
    }
  
    cargarTelefonos() {
      const datos = JSON.parse(localStorage.getItem('telefonos'));
      if (datos) {
        this.telefonos = datos.map(t => Object.assign(new Telefono(), t));
      }
    }
  }
  
  // Inicialización del sistema
  const sistema = new SistemaReparacion();
  sistema.cargarTelefonos();
  
  // Referencias al DOM
  const formTelefono = document.getElementById('form-telefono');
  const listaReparaciones = document.getElementById('lista-reparaciones');
  const diagnosticoInput = document.getElementById('diagnostico');
  const abonoInput = document.getElementById('abono');
  const repuestoInput = document.getElementById('repuesto');
  const estadoSelect = document.getElementById('estado');
  const actualizarReparacionButton = document.getElementById('actualizar-reparacion');
  
  // Eventos
  formTelefono.addEventListener('submit', event => {
    event.preventDefault();
    const serial = document.getElementById('serial').value.trim();
    const imei = document.getElementById('imei').value.trim();
  
    if (serial && imei) {
      const telefono = new Telefono(serial, imei);
      sistema.registrarTelefono(telefono);
      actualizarListaReparaciones();
      formTelefono.reset();
    }
  });
  
  actualizarReparacionButton.addEventListener('click', () => {
    const serialSeleccionado = prompt('Ingrese el número de serie del teléfono que desea actualizar:');
    const telefono = sistema.telefonos.find(t => t.serial === serialSeleccionado);
  
    if (telefono) {
      const diagnostico = diagnosticoInput.value.trim();
      const abono = parseFloat(abonoInput.value.trim());
      const repuesto = repuestoInput.value.trim();
      const estado = estadoSelect.value;
  
      if (diagnostico) {
        telefono.agregarDiagnostico(diagnostico);
      }
  
      if (abono >= 0) {
        telefono.autorizarReparacion(abono);
      }
  
      if (repuesto) {
        telefono.agregarRepuesto(repuesto);
      }
  
      telefono.actualizarEstado(estado);
      sistema.actualizarLocalStorage();
      actualizarListaReparaciones();
    } else {
      alert('Teléfono no encontrado.');
    }
  });
  
  function actualizarListaReparaciones() {
    listaReparaciones.innerHTML = '';
    sistema.telefonos.forEach(telefono => {
      const li = document.createElement('li');
      li.textContent = `Serial: ${telefono.serial}, Estado: ${telefono.estado}, Diagnóstico: ${telefono.diagnostico || 'N/A'}, Abono: ${telefono.abono}%`;
      listaReparaciones.appendChild(li);
    });
  }
  
  // Actualizar la lista al cargar la página
  actualizarListaReparaciones();
  