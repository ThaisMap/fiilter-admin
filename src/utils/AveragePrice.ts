import { ItemCarteira } from "../entities/itemCarteira"
import { Transacao } from "../entities/transacao"

function calculateNewAvgPrice(
  item: ItemCarteira,
  transaction: Transacao
): number {
  const qty = item.amount + transaction.amount
  const totalValue =
    item.avgPrice * item.amount + transaction.amount * transaction.price
  const newAverage = totalValue / qty
  return newAverage
}

export { calculateNewAvgPrice }
