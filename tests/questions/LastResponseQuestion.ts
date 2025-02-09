import { Question, Actor } from "@serenity-js/core";
import { LastResponse } from "@serenity-js/rest";

export const LastResponseQuestion = {
  status: () =>
    Question.about(
      "el estado de la última respuesta de la API",
      (actor: Actor) => LastResponse.status().answeredBy(actor)
    ),
  body: <T>() =>
    Question.about(
      "el cuerpo de la última respuesta de la API",
      (actor: Actor) => LastResponse.body<T>().answeredBy(actor)
    ),
};
