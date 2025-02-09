import { Task } from "@serenity-js/core";
import { GetRequest, Send, LastResponse } from "@serenity-js/rest";

export const ConsultarGuiaTask = {
  conNumero: (numeroGuia: number) =>
    Task.where(
      `#actor consulta la guía con número ${numeroGuia} a través de la API`,
      Send.a(GetRequest.to(`/guias/cm-guias-consultas-ms/guia/${numeroGuia}`))
    ),
};
