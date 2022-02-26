import { WalletItem } from "../entities/walletItem"
import { Operation } from "../entities/operation"

function calculateNewAvgPrice(
  item: WalletItem,
  transaction: Operation
): number {
  const qty = item.amount + transaction.amount
  const totalValue =
    item.avgPrice * item.amount + transaction.amount * transaction.price
  const newAverage = totalValue / qty
  return newAverage
}

export { calculateNewAvgPrice }
