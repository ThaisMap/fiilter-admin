import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit"
import { ItemCarteira } from "../../entities/itemCarteira"
import { Transacao } from "../../entities/transacao"
import { dadosCarteira } from "../../fakeData/carteira"
import { compras } from "../../fakeData/compras"
import { calculateNewAvgPrice } from "../../utils/AveragePrice"

export interface CarteiraState {
  carteira: ItemCarteira[]
  transacoes: Transacao[]
}

const initialState: CarteiraState = {
  carteira: dadosCarteira,
  transacoes: compras
}

export const carteiraSlice = createSlice({
  name: "carteira",
  initialState,
  reducers: {
    addCompra: (state, action: PayloadAction<Transacao>) => {
      const compra = action.payload
      state.transacoes.push(compra)
      const presente = state.carteira.some(fii => fii.fund === compra.fund)
      if (presente) {
        state.carteira = state.carteira.map(fundo => {
          if (fundo.fund === compra.fund) {
            const avgPrice = calculateNewAvgPrice(fundo, compra)
            return { ...fundo, amount: fundo.amount + compra.amount, avgPrice }
          }
          return fundo
        })
      } else {
        state.carteira.push(
          new ItemCarteira(nanoid(), compra.fund, compra.amount, compra.price)
        )
      }
    },
    addVenda: (state, action: PayloadAction<Transacao>) => {
      const venda = action.payload
      state.transacoes.push(venda)
      state.carteira = state.carteira.map(fundo => {
        if (fundo.fund === venda.fund) {
          return { ...fundo, amount: fundo.amount - venda.amount }
        }
        return fundo
      })
    }
  }
})

export const { addCompra, addVenda } = carteiraSlice.actions

export default carteiraSlice.reducer
