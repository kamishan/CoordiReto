Feature: Crear Guía

  Scenario: Creacion de guía con datos válidos
    Given que el usuario requiere crear una guía
    When el usuario ingresa los datos con referenciaRecaudo RefOK123 y valorRecaudar 35000
    Then la guia ha sido creada exitosamente con status 200
