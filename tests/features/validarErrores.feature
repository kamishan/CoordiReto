Feature: Validaciones de Guía

  Scenario: Error cuando valorRecaudar es vacio
    Given que el usuario desea crear una guía
    When el usuario ingresa los datos con referenciaRecaudo RefOK123 y valorRecaudar
    Then el sistema genera error 400 Bad Request
    And la descripcion del error El campo valorRecaudar es requerido
