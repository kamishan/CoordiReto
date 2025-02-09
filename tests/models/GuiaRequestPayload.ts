export interface GuiaRequestPayload {
  identificacion: string;
  divisionCliente: string;
  idProceso: number;
  codigoPais: number;
  valoracion: string;
  tipoCuenta: number;
  contenido: string;
  codigoProducto: string;
  nivelServicio: number;
  detalle: DetalleGuia[];
  datosRemitente: DatosRemitente;
  datosDestinatario: DatosDestinatario;
  valorRecaudar: number;
  referenciaRecaudo: string;
  tipoGuia: number;
  referenciaGuia: string;
  usuario: string;
  fuente: string;
  observaciones: string;
}

interface DetalleGuia {
  pesoReal: number;
  largo: number;
  ancho: number;
  alto: number;
  unidades: number;
  ubl: number;
  referencia: string;
}

interface DatosRemitente {
  identificacion: string;
  detalleRemitente: string;
  tipoViaRemitente: string;
  viaRemitente: string;
  numeroRemitente: string;
  codigoCiudadRemitente: string;
  descripcionTipoViaRemitente: string;
  direccionRemitente: string;
  nombreRemitente: string;
  indicativoRemitente: string;
  celularRemitente: string;
  correoRemitente: string;
}

interface DatosDestinatario {
  identificacion: string;
  detalleDestinatario: string;
  tipoViaDestinatario: string;
  viaDestinatario: string;
  numeroDestinatario: string;
  descripcionTipoViaDestinatario: string;
  direccionDestinatario: string;
  codigoCiudadDestinatario: string;
  nombreDestinatario: string;
  indicativoDestinatario: string;
  celularDestinatario: string;
  correoDestinatario: string;
}
