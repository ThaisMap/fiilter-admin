import { OperationTypes } from "../enums/operationTypes"

export interface IOperation {
  id: string
  fund: string
  amount: number
  price: number
  date: Date
  type: OperationTypes
}

export class Operation implements IOperation {
  id: string
  fund: string
  amount: number
  price: number
  date: Date
  type: OperationTypes

  constructor(
    id: string,
    fund: string,
    amount: number,
    price: number,
    date: Date,
    type: OperationTypes = OperationTypes.buy
  ) {
    this.id = id
    this.fund = fund
    this.amount = amount
    this.price = price
    this.date = date
    this.type = type
  }
}
