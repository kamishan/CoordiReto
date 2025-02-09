import { Given, When, Then } from "@cucumber/cucumber";
import { actorCalled } from "@serenity-js/core";
import { ConsultarGuiaTask } from "../tasks/ConsultarGuiaTask";
import { LastResponseQuestion } from "../questions/LastResponseQuestion";
import { Ensure, equals } from "@serenity-js/assertions";

Given("^que el usuario consulta una guía$", async () => {
  //
});

When("^el usuario consulta la guía (.*)$", async (numeroGuia: number) => {
  await actorCalled("Usuario").attemptsTo(
    ConsultarGuiaTask.conNumero(numeroGuia)
  );
});

Then(
  "^el estado de la respuesta debe ser (.*)$",
  async (statusCode: number) => {
    await actorCalled("Usuario").attemptsTo(
      Ensure.that(LastResponseQuestion.status(), equals(statusCode))
    );
  }
);

Then("^mostrar los datos de la guia$", async (numeroGuia: number) => {
  await actorCalled("Usuario").attemptsTo(
    Ensure.that(LastResponseQuestion.body<any>().guia, equals(numeroGuia))
  );
});
