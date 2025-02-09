import { Given, When, Then } from "@cucumber/cucumber";
import { actorCalled } from "@serenity-js/core";
import { CrearGuiaTask } from "../tasks/CrearGuiaTask";
import { LastResponseQuestion } from "../questions/LastResponseQuestion";
import { Ensure, includes } from "@serenity-js/assertions";

Given("^que el usuario requiere crear una guía$", async () => {});

When(
  "^el usuario ingresa los datos con referenciaRecaudo (.*) y valorRecaudar (.*)$",
  async (referencia: string, valor: string) => {
    await actorCalled("Usuario").attemptsTo(
      CrearGuiaTask.conLosDatos(referencia, parseInt(valor, 10))
    );
  }
);

Then(
  "^la guia ha sido creada exitosamente con status (.*)$",
  async (mensajeExito: string) => {
    await actorCalled("Usuario").attemptsTo(
      Ensure.that(
        LastResponseQuestion.body<any>().mensaje,
        includes(mensajeExito)
      ) // Ajustar <any> al tipo esperado
    );
  }
);
