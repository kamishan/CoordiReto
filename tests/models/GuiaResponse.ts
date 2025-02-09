export interface GuiaResponse {
  isError: boolean;
  data: GuiaDataConsulta;
  timestamp: string;
  id: string;
}

interface GuiaDataConsulta {
  codigoRemision: string;
  identificacion: string;
  division: string;
  proceso: number;
  tipoCuenta: string;
  nombreRemitente: string;
  documentoRemitente: null;
  tipoDocumentoRemitente: null;
  divisionRemitente: null;
  indicativoRemitente: string;
  celularRemitente: string;
  correoRemitente: string;
  ciudadRemitente: string;
  detalleRemitente: string;
  tipoViaRemitente: string;
  descripcionTipoViaRemitente: string;
  viaRemitente: string;
  numeroRemitente: string;
  otraDireccionRemitente: null;
  direccionRemitente: string;
  terminalRemitente: number;
  nombreDestinatario: string;
  documentoDestinatario: null;
  tipoDocumentoDestinatario: null;
  divisionDestinatario: null;
  indicativoDestinatario: string;
  celularDestinatario: string;
  correoDestinatario: string;
  ciudadDestinatario: string;
  detalleDestinatario: string;
  tipoViaDestinatario: string;
  descripcionTipoViaDestinatario: string;
  viaDestinatario: string;
  numeroDestinatario: string;
  otraDireccionDestinatario: null;
  direccionDestinatario: string;
  terminalDestinatario: number;
  valorDeclarado: string;
  referenciaGuia: string;
  observaciones: string;
  contenido: string;
  nivelServicio: number;
  valorRecaudar: number;
  referenciaRecaudo: string;
  tipoProducto: null;
  tipoEnvioEspecial: null;
  quienPagaEnvio: null;
  codigoPais: number;
  codigoPostalRemitente: null;
  codigoPostalDestinatario: null;
  idFiscal: null;
  datosRetorno: null;
  detalle: DetalleConsulta[];
}

interface DetalleConsulta {
  largo: number;
  alto: number;
  ancho: number;
  peso: number;
  cantidad: number;
  referencia: string;
  ubl: number;
  contenido: null;
  id_contenido: null;
  codigoPaquete: null;
  nombrePaquete: null;
  valorDeclarado: null;
}
