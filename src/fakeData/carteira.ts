import { WalletItem } from "../entities/walletItem"

const dadosCarteira: WalletItem[] = [
  new WalletItem({ id: "001", fund: "IRDM11", amount: 22, avgPrice: 104.93 }),
  new WalletItem({ id: "002", fund: "BTAL11", amount: 10, avgPrice: 95.13 }),
  new WalletItem({ id: "003", fund: "CPFF11", amount: 28, avgPrice: 75.31 }),
  new WalletItem({ id: "004", fund: "XPSF11", amount: 25, avgPrice: 86.31 })
]

export { dadosCarteira }
