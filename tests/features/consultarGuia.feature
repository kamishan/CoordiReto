Feature: Consultar Guía

  Scenario: Consultar guía existente
    Given que el usuario consulta una guía
    When el usuario consulta la guía 99020276396
    Then el estado de la respuesta debe ser 200
    And mostrar los datos de la guia
