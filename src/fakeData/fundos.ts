import { Fund } from "../entities/fund"

const fundos: Fund[] = [
  new Fund(
    "BTAL",
    "BTAL11",
    "Btg Pactual Agro Logística",
    "Agronegócio",
    "Tijolo"
  ),
  new Fund("CPFF", "CPFF11", "Capitânia REIT FOF", "Fundo de Fundos", "FOF"),
  new Fund(
    "IRDM",
    "IRDM11",
    "Iridium Recebíveis Imobiliários",
    "Recebíveis Imobiliários",
    "Papel"
  ),
  new Fund(
    "JSRE",
    "JSRE11",
    "JS Real Estate Multigestão",
    "Lajes Comerciais",
    "Tijolo"
  ),
  new Fund("XPSF", "XPSF11", "XP Selection", "Fundo de Fundos", "FOF")
]

export { fundos }
