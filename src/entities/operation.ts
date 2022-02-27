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

  constructor(operation: IOperation) {
    this.id = operation.id
    this.fund = operation.fund
    this.amount = operation.amount
    this.price = operation.price
    this.date = operation.date
    this.type = operation.type
  }
}
