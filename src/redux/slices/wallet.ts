import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit"
import { WalletItem } from "../../entities/walletItem"
import { Operation } from "../../entities/operation"
import { dadosCarteira } from "../../fakeData/carteira"
import { compras } from "../../fakeData/compras"
import { calculateNewAvgPrice } from "../../utils/AveragePrice"

export interface WalletState {
  wallet: WalletItem[]
  operations: Operation[]
}

const initialState: WalletState = {
  wallet: dadosCarteira,
  operations: compras
}

export const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    buyFund: (state, action: PayloadAction<Operation>) => {
      const buy = action.payload

      state.operations.push(buy)

      const walletHasFund = state.wallet.some(fii => fii.fund === buy.fund)

      if (walletHasFund) {
        state.wallet = state.wallet.map(fundo => {
          if (fundo.fund === buy.fund) {
            const avgPrice = calculateNewAvgPrice(fundo, buy)
            return { ...fundo, amount: fundo.amount + buy.amount, avgPrice }
          }
          return fundo
        })
      } else {
        state.wallet.push(
          new WalletItem(nanoid(), buy.fund, buy.amount, buy.price)
        )
      }
    },
    sellFund: (state, action: PayloadAction<Operation>) => {
      const sale = action.payload
      state.operations.push(sale)
      state.wallet = state.wallet.map(fundo => {
        if (fundo.fund === sale.fund) {
          return { ...fundo, amount: fundo.amount - sale.amount }
        }
        return fundo
      })
    }
  }
})

export const { buyFund, sellFund } = walletSlice.actions

export default walletSlice.reducer
