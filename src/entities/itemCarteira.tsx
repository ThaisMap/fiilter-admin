export interface IItemCarteira {
  id: string;
  fund: string;
  amount: number;
  avgPrice: number;
}

export class ItemCarteira implements IItemCarteira {
  id: string;
  fund: string;
  amount: number;
  avgPrice: number;

  constructor(id: string, fund: string, amount: number, avgPrice: number) {
    this.id = id;
    this.fund = fund;
    this.amount = amount;
    this.avgPrice = avgPrice;
  }
}
