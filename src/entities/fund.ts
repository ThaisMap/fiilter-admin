export interface IFund {
  id: string
  cnpjAdministrador?: string
  cnpjFundo?: string
  nomeAdministrador?: string
  nomeFundo: string
  setor: string
  ticker: string
  tipo: string
}

export class Fund implements IFund {
  id: string
  cnpjAdministrador?: string
  cnpjFundo?: string
  nomeAdministrador?: string
  nomeFundo: string
  setor: string
  ticker: string
  tipo: string

  constructor(
    id: string,
    ticker: string,
    nomeFundo: string,
    setor: string,
    tipo: string,
    cnpjAdministrador: string = "cnpjAdministrador",
    cnpjFundo: string = "cnpjFundo",
    nomeAdministrador: string = "nomeAdministrador"
  ) {
    this.id = id
    this.nomeFundo = nomeFundo
    this.setor = setor
    this.ticker = ticker
    this.tipo = tipo
    this.cnpjAdministrador = cnpjAdministrador
    this.cnpjFundo = cnpjFundo
    this.nomeAdministrador = nomeAdministrador
  }
}
