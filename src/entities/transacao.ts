import { TiposTransacao } from '../enums/tiposTransacao';

export interface ITransacao {
  id: string;
  fund: string;
  amount: number;
  price: number;
  date: Date;
  type: TiposTransacao;
}

export class Transacao implements ITransacao {
  id: string;
  fund: string;
  amount: number;
  price: number;
  date: Date;
  type: TiposTransacao;

  constructor(
    id: string,
    fund: string,
    amount: number,
    price: number,
    date: Date,
    type: TiposTransacao = TiposTransacao.compra
  ) {
    this.id = id;
    this.fund = fund;
    this.amount = amount;
    this.price = price;
    this.date = date;
    this.type = type;
  }
}
