import { Task } from "@serenity-js/core";
import { PostRequest, Send } from "@serenity-js/rest";
import { GuiaRequestPayload } from "../models/GuiaRequestPayload";

class CrearGuiaTaskBuilder {
  private payload: GuiaRequestPayload = {
    identificacion: "890904713",
    divisionCliente: "00",
    idProceso: 100001,
    codigoPais: 170,
    valoracion: "200000",
    tipoCuenta: 3,
    contenido: "reloj",
    codigoProducto: "",
    nivelServicio: 22,
    detalle: [
      {
        pesoReal: 1,
        largo: 5,
        ancho: 5,
        alto: 3,
        unidades: 1,
        ubl: 0,
        referencia: "ref detalle*",
      },
    ],
    datosRemitente: {
      identificacion: "1020304044",
      detalleRemitente: "Casa",
      tipoViaRemitente: "7",
      viaRemitente: "15",
      numeroRemitente: "53 48",
      codigoCiudadRemitente: "76001000",
      descripcionTipoViaRemitente: "Calle",
      direccionRemitente: "Calle 53 # 53 48",
      nombreRemitente: "Remitente Prueba",
      indicativoRemitente: "57",
      celularRemitente: "3007876543",
      correoRemitente: "pruebaremitente@coo.com",
    },
    datosDestinatario: {
      identificacion: "1254511109",
      detalleDestinatario: "Casa",
      tipoViaDestinatario: "5",
      viaDestinatario: "15",
      numeroDestinatario: "45 93",
      descripcionTipoViaDestinatario: "Calle",
      direccionDestinatario: "calle 45 93",
      codigoCiudadDestinatario: "76001000",
      nombreDestinatario: "Destinatario Prueba",
      indicativoDestinatario: "57",
      celularDestinatario: "3216549825",
      correoDestinatario: "pruebadestinatario@coor.com",
    },
    valorRecaudar: 0,
    referenciaRecaudo: "",
    tipoGuia: 1,
    referenciaGuia: "Ref guía",
    usuario: "prueba@coordinaora.com",
    fuente: "envios",
    observaciones: "prueba RCE",
  };

  conReferenciaRecaudo(referenciaRecaudo: string): CrearGuiaTaskBuilder {
    this.payload.referenciaRecaudo = referenciaRecaudo;
    return this;
  }

  conValorRecaudar(valorRecaudar: number): CrearGuiaTaskBuilder {
    this.payload.valorRecaudar = valorRecaudar;
    return this;
  }

  conContenido(contenido: string): CrearGuiaTaskBuilder {
    this.payload.contenido = contenido;
    return this;
  }

  build(): GuiaRequestPayload {
    return this.payload;
  }
}

export class CrearGuiaTask {
  static conLosDatos(referenciaRecaudo: string, valorRecaudar: number): Task {
    return Task.where(
      `#actor crea una guía con referencia de recaudo "${referenciaRecaudo}" y valor a recaudar "${valorRecaudar}" a través de la API usando el Builder`,
      Send.a(
        PostRequest.to("/guias/cm-guias-creacion-ms/guia").using(
          new CrearGuiaTaskBuilder()
            .conReferenciaRecaudo(referenciaRecaudo)
            .conValorRecaudar(valorRecaudar)
            .build() as {}
        )
      )
    );
  }

  static conPayload(payloadBuilder: CrearGuiaTaskBuilder): Task {
    return Task.where(
      `#actor crea una guía con payload personalizado a través de la API`,
      Send.a(
        PostRequest.to("/guias/cm-guias-creacion-ms/guia").using(
          payloadBuilder.build() as {}
        )
      )
    );
  }
}
