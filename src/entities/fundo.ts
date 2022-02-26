export interface IFundo {
  id: string;
  cnpjAdministrador: string;
  cnpjFundo: string;
  nomeAdministrador: string;
  nomeFundo: string;
  setor: string;
  ticker: string;
  tipo: string;
}

export class Fundo implements IFundo {
  id: string;
  cnpjAdministrador: string;
  cnpjFundo: string;
  nomeAdministrador: string;
  nomeFundo: string;
  setor: string;
  ticker: string;
  tipo: string;

  constructor(
    id: string,
    /*     cnpjAdministrador: string,
    cnpjFundo: string,
    nomeAdministrador: string, */
    ticker: string,
    nomeFundo: string,
    setor: string,
    tipo: string
  ) {
    this.id = id;
    this.cnpjAdministrador = 'cnpjAdministrador';
    this.cnpjFundo = 'cnpjFundo';
    this.nomeAdministrador = 'nomeAdministrador';
    this.nomeFundo = nomeFundo;
    this.setor = setor;
    this.ticker = ticker;
    this.tipo = tipo;
  }
}
