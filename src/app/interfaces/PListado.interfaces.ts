export interface Listproduc {
  registro: Registro[];
}

export interface Registro {
  id:              number;
  nombre:          Nombre;
  descripcion:     Descripcion;
  logo:            string;
  fechaLiberacion: null;
  fechaRevision:   null;
}

export enum Descripcion {
  TarjetaDeConsumoBajoLaModalidadDeCrédito = "Tarjeta de consumo bajo la modalidad de crédito",
}

export enum Nombre {
  TarjetasDeCrédito = "Tarjetas de Crédito",
}
