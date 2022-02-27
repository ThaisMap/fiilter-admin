export interface IWalletItem {
  id: string
  fund: string
  amount: number
  avgPrice: number
}

export class WalletItem implements IWalletItem {
  id: string
  fund: string
  amount: number
  avgPrice: number

  constructor(item: IWalletItem) {
    this.id = item.id
    this.fund = item.fund
    this.amount = item.amount
    this.avgPrice = item.avgPrice
  }
}
