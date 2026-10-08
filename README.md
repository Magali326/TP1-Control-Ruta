# TP1: Sistema de Control de Ruta: Magali Bustos

Proyecto desarrollado para la materia Programación. Consiste en una aplicación web interactiva que valida patentes de vehículos, registra la velocidad de circulación y calcula las multas correspondientes según el exceso detectado.

## 🛠️ Tecnologías utilizadas

* HTML5
* JavaScript (ES6)

## 📋 Funcionalidades

* **Limpieza y validación de patente:** Formatea la entrada (remueve espacios y convierte a mayúsculas) y valida que contenga entre 6 y 7 caracteres.
* **Control de velocidad:** Solicita y valida que la velocidad sea un valor numérico mayor o igual a cero.
* **Cálculo de sanciones:**
  * Hasta 110 km/h: Sin multa ($0)
  * De 111 km/h a 130 km/h: Multa leve ($5000)
  * Más de 130 km/h: Multa grave ($10000)

## 🚀 Cómo ejecutarlo

1. Abrir el archivo `index.html` en el navegador (o mediante Live Server en Visual Studio Code).
2. Abrir la Consola de Desarrollador (`F12`) para visualizar los reportes generados.