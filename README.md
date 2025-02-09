# CoordiReto
 Prueba Coordinadora

# Plan de Pruebas para API de Gestión de Guías con Recaudo Contra Entrega

Este repositorio contiene toda la documentación y scripts relacionados con el plan de pruebas para la creación de guías utilizando el servicio **"Recaudo Contra Entrega"**. Se abordan desde la definición de la historia de usuario y criterios de aceptación, hasta la implementación de pruebas manuales y automatizadas (BDD y funcionales) utilizando herramientas como Postman, Playwright y el patrón Screenplay. Incluyendo:

- Historias de usuario detalladas
- Casos de prueba manuales
- Escenarios BDD
- Implementación de pruebas automatizadas con Playwright + Screenplay

---

## Tabla de Contenidos

- [Introducción](#introducción)
- [Historia de Usuario y Criterios de Aceptación](#historia-de-usuario-y-criterios-de-aceptación)
- [Técnicas de Prueba Aplicadas](#técnicas-de-prueba-aplicadas)
- [Ejemplo de Llamado al Servicio](#ejemplo-de-llamado-al-servicio)
- [Pruebas Manuales]((#https://drive.google.com/file/d/1mibWxpiqj6bJegFFmjYO6g30tjyt4012/view?usp=sharing))
- [Escenarios BDD en Gherkin](#https://drive.google.com/file/d/1mibWxpiqj6bJegFFmjYO6g30tjyt4012/view?usp=sharing)
- [Pruebas Funcionales Automatizadas con Playwright y Screenplay](#pruebas-funcionales-automatizadas-con-playwright-y-screenplay)

---

## Introducción

El objetivo de este proyecto es validar la funcionalidad de creación de guías mediante el servicio "Recaudo Contra Entrega" a través de diversas estrategias de prueba:

- **Validaciones:** 
  - Comprobación de campos obligatorios y límites de caracteres en la "Referencia de recaudo".
  - Validación del campo "Valor a recaudar" para asegurar que se encuentre entre $1 y $16'000.000, incluyendo los valores límite.
- **Casos adicionales:**
  - Creación de guías omitiendo datos opcionales.
  - Manejo de caracteres especiales en el campo "Referencia".
  - Escenarios de concurrencia para asegurar la estabilidad del servicio.

Se emplean técnicas de partición de equivalencia, análisis de valores límite, tablas de decisiones y transiciones de estados para abarcar la mayor cantidad de escenarios posibles.

---

## Historia de Usuario y Criterios de Aceptación

### Historia de Usuario

*Como usuario autenticado del sistema de guías, necesito poder crear una guía utilizando el servicio "Recaudo Contra Entrega" para enviar paquetes, de manera que:*

- El sistema valide y almacene correctamente la información relacionada con el recaudo (servicio, referencia y valor a recaudar).
- Se asegure que la "Referencia de recaudo" no exceda el límite de caracteres permitido.
- Se verifique que el "Valor a recaudar" esté dentro del rango permitido (entre $1 y $16'000.000).
- Se gestionen correctamente los casos de campos obligatorios faltantes y valores límite.

### Criterios de Aceptación

1. **Validación de campos obligatorios:**  
   - El sistema debe validar que los campos "referenciaRecaudo" y "valorRecaudar" no estén vacíos.
   - Si alguno de estos campos está vacío, el sistema debe mostrar un mensaje de error indicando que son obligatorios.

2. **Longitud máxima del campo "referenciaRecaudo":**  
   - El campo "referenciaRecaudo" no debe exceder los 30 caracteres.
   - Si se supera este límite, el sistema debe mostrar un mensaje de error.


3. **Rango válido para el campo "valorRecaudar:"**  
   - El valor a recaudar ("valorRecaudar") debe estar dentro del rango permitido:
     ~ Mínimo: $1.
     ~ Máximo: $16'000.000.
   - Si el valor está fuera de este rango, el sistema debe mostrar un mensaje de error.

4. **Guardado correcto de la información:**  
   - Cuando todos los datos sean válidos, el sistema debe guardar correctamente la información de la guía, incluyendo:
     ~ Servicio seleccionado.
     ~ Referencia de recaudo ("referenciaRecaudo").
     ~ Valor a recaudar ("valorRecaudar").


5. **Manejo de caracteres especiales en "referenciaRecaudo":**  
   - El sistema debe permitir el uso de caracteres especiales en el campo "referenciaRecaudo" (Ej: !@#$%^&*()), siempre y cuando no se exceda el 
     límite de 30 caracteres.

6. **Respuesta del servicio:**  
   - El servicio debe responder con un código de estado HTTP adecuado:
     ~ 200 OK: Si la guía se crea correctamente.
     ~ 400 Bad Request: Si hay errores de validación (campos vacíos, valores fuera de rango, etc.).


7. **Consistencia en la respuesta:**  
   - En caso de error, el sistema debe proporcionar mensajes claros y específicos que indiquen la razón del fallo (por ejemplo, "El campo 
     'referenciaRecaudo' excede el límite de 30 caracteres").
  
8. **Generar Guía con datos opcionales omitidos:**  
   - El sistema debe manejar correctamente la creación de guías con datos opcionales omitidos, sin afectar la funcionalidad principal del 
     servicio.

---

## Técnicas de Prueba Aplicadas

- **Partición de Equivalencia:**  
  Se agrupan los valores del campo "Valor a recaudar" en particiones válidas e inválidas.

- **Análisis de Valores Límite:**  
  Se prueba el comportamiento del sistema con los valores mínimos y máximos permitidos.

- **Tabla de Decisiones:**  
  Se documentan las reglas de negocio y validación para cada campo.

- **Transición de Estados:**  
  Se modela el flujo completo desde el envío de la solicitud hasta el almacenamiento o generación de errores.

---

## Ejemplo de Llamado al Servicio

### Solicitud (POST)

```json
POST https://apiv2-test.coordinadora.com/guias/cm-guias-ms/guia

{
  "identificacion": "890904713",
  "divisionCliente": "00",
  "idProceso": 100001,
  "codigoPais": 170,
  "valoracion": "200000",
  "tipoCuenta": 3,
  "contenido": "reloj",
  "codigoProducto": "",
  "nivelServicio": 22,
  "detalle": [
    {
      "pesoReal": 1,
      "largo": 5,
      "ancho": 5,
      "alto": 3,
      "unidades": 1,
      "ubl": 0,
      "referencia": "ref detalle"
    }
  ],
  "datosRemitente": {
    "identificacion": "1020304044",
    "detalleRemitente": "Casa",
    "tipoViaRemitente": "7",
    "viaRemitente": "15",
    "numeroRemitente": "53 48",
    "codigoCiudadRemitente": "76001000",
    "descripcionTipoViaRemitente": "Calle",
    "direccionRemitente": "Calle 53 # 53 48",
    "nombreRemitente": "Remitente Prueba",
    "indicativoRemitente": "57",
    "celularRemitente": "3007876543",
    "correoRemitente": "pruebaremitente@coo.com"
  },
  "datosDestinatario": {
    "identificacion": "1254511109",
    "detalleDestinatario": "Casa",
    "tipoViaDestinatario": "5",
    "viaDestinatario": "15",
    "numeroDestinatario": "45 93",
    "descripcionTipoViaDestinatario": "Calle",
    "direccionDestinatario": "calle 45 93",
    "codigoCiudadDestinatario": "76001000",
    "nombreDestinatario": "Destinatario Prueba",
    "indicativoDestinatario": "57",
    "celularDestinatario": "3216549825",
    "correoDestinatario": "pruebadestinatario@coor.com"
  },
  "valorRecaudar": "38500",
  "referenciaRecaudo": "ref recaudo prueba",
  "tipoGuia": 1,
  "referenciaGuia": "Ref guía",
  "usuario": "prueba@coordinaora.com",
  "fuente": "envios",
  "observaciones": "prueba RCE"
}

```
---
