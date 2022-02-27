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

  constructor(fund: IFund) {
    this.id = fund.id
    this.nomeFundo = fund.nomeFundo
    this.setor = fund.setor
    this.ticker = fund.ticker
    this.tipo = fund.tipo
    this.cnpjAdministrador = fund.cnpjAdministrador || "cnpjAdministrador"
    this.cnpjFundo = fund.cnpjFundo || "cnpjFundo"
    this.nomeAdministrador = fund.nomeAdministrador || "nomeAdministrador"
  }
}
