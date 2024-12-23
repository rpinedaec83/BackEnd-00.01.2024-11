class RepairSystem {
  constructor() {
    this.technicians = [
      { name: 'Técnico A', skills: ['android'] },
      { name: 'Técnico B', skills: ['ios'] }
    ];
    this.reportedDevices = [
      { serial: '123ABC', imei: '111111' },
    ];
  }

  isDeviceEligible(serial, imei) {
    return !this.reportedDevices.some(
      device => device.serial === serial || device.imei === imei
    );
  }

  assignTechnician(brand) {
    const technician = this.technicians.find(tech => tech.skills.includes(brand));
    return technician ? technician.name : 'No hay técnico disponible para esta marca';
  }
}

const system = new RepairSystem();

document.getElementById('repairForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const serial = document.getElementById('serial').value;
  const imei = document.getElementById('imei').value;
  const brand = document.getElementById('brand').value;
  const diagnostic = document.getElementById('diagnostic').value;
  const authorization = document.getElementById('authorization').value;
  const payment = parseFloat(document.getElementById('payment').value);

  const output = document.getElementById('output');
  output.innerHTML = '';

  if (!system.isDeviceEligible(serial, imei)) {
    output.innerHTML = 'El dispositivo está reportado y no puede ser reparado.';
    return;
  }

  if (authorization !== 'yes') {
    output.innerHTML = 'No se tiene la autorización escrita del usuario.';
    return;
  }

  if (payment < 50) {
    output.innerHTML = 'El abono es insuficiente (se requiere al menos el 50%).';
    return;
  }

  const technician = system.assignTechnician(brand);

  output.innerHTML = `
    <p><strong>Dispositivo Elegible:</strong> Sí</p>
    <p><strong>Diagnóstico:</strong> ${diagnostic}</p>
    <p><strong>Técnico Asignado:</strong> ${technician}</p>
  `;
});
