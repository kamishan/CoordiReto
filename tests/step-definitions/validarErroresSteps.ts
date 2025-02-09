import { Given, When, Then } from "@cucumber/cucumber";
import { actorCalled } from "@serenity-js/core";
import { CrearGuiaTask } from "../tasks/CrearGuiaTask";
import { LastResponseQuestion } from "../questions/LastResponseQuestion";
import { Ensure, includes } from "@serenity-js/assertions";

Given("^Usuario desea crear una guía$", async () => {});

When(
  "^When el usuario ingresa los datos con referenciaRecaudo (.*) y valorRecaudar (.*)$",
  async (valor: string) => {
    await actorCalled("Usuario").attemptsTo(
      CrearGuiaTask.conLosDatos("", parseInt(valor, 10))
    );
  }
);

Then(
  "^el sistema genera error (.*) Bad Request$",
  async (mensajeError: string) => {
    await actorCalled("Usuario").attemptsTo(
      Ensure.that(
        LastResponseQuestion.body<any>().errores,
        includes(mensajeError)
      ) 
    );
  }
);

Then(
  "^la descripcion del error (.*)$",
  async (mensajeErrorAdicional: string) => {
    await actorCalled("Usuario").attemptsTo(
      Ensure.that(
        LastResponseQuestion.body<any>().errores,
        includes(mensajeErrorAdicional)
      ) 
    );
  }
);
