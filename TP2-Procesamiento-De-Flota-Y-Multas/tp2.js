let registros = [
  { patente: "AB123CD", velocidad: 120, tipo: "auto",   km: 150 },
  { patente: "XY987ZW", velocidad: 95,  tipo: "camion", km: 300 },
  { patente: "MN456GH", velocidad: 135, tipo: "auto",   km: 80  },
  { patente: "QR789JK", velocidad: 88,  tipo: "moto",   km: 45  },
  { patente: "ST012LM", velocidad: 125, tipo: "auto",   km: 200 }
];

let limiteVelocidad = 110;   
let limiteMultaLeve = 130;   
let montoMultaLeve = 5000;   
let montoMultaGrave = 10000; 

function calcularMulta(velocidad) {
  if (velocidad <= limiteVelocidad) {
    return 0;
  } else if (velocidad <= limiteMultaLeve) {
    return montoMultaLeve;
  } else {
    return montoMultaGrave;
  }
}

let reporteMultas = registros.map(vehiculo => {
  return {
    patente: vehiculo.patente,
    monto: calcularMulta(vehiculo.velocidad)
  };
});

console.log("=== Parte 1: Reporte de multas ===");
console.log(reporteMultas);

let infractores = registros.filter(vehiculo => vehiculo.velocidad > limiteVelocidad);

let patentesInfractores = infractores.map(vehiculo => vehiculo.patente);

console.log("\n=== Parte 2: Infractores ===");
console.log(`Cantidad de infractores: ${infractores.length}`);
console.log("Patentes:", patentesInfractores);

let totalKm = registros.reduce((acumulador, vehiculo) => {
  return acumulador + vehiculo.km;
}, 0);

let recaudacion = reporteMultas.reduce((acumulador, multa) => {
  return acumulador + multa.monto;
}, 0);

console.log("\n=== Parte 3: Estadísticas de la flota ===");
console.log(`La flota recorrió ${totalKm} km y generó $${recaudacion} en multas.`);