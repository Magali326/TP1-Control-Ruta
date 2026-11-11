# TP2: Procesamiento de Flota y Multas: Magali Bustos

Proyecto desarrollado para la materia Programación. Consiste en un programa que procesa el registro diario de una flota de vehículos para calcular multas y generar reportes, utilizando exclusivamente los métodos de orden superior `map`, `filter` y `reduce` (sin bucles `for` ni `while`).

## 🛠️ Tecnologías utilizadas

* HTML5
* JavaScript (ES6)

## 📋 Funcionalidades

* **Cálculo de multas con `map`:** Genera el arreglo `reporteMultas`, donde cada elemento contiene la patente y el monto de la multa del vehículo:
  * Hasta 110 km/h: Sin multa ($0)
  * De 111 km/h a 130 km/h: Multa leve ($5000)
  * Más de 130 km/h: Multa grave ($10000)
* **Filtrado de infractores con `filter`:** Obtiene los vehículos que superan los 110 km/h y muestra la cantidad de infractores y sus patentes.
* **Estadísticas con `reduce`:** Calcula el total de kilómetros recorridos por la flota y la recaudación total en multas.

## 🚀 Cómo ejecutarlo

1. Abrir el archivo `index.html` en el navegador (o mediante Live Server en Visual Studio Code).
2. Abrir la Consola de Desarrollador (`F12`) para visualizar los reportes generados.