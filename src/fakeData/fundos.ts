import { Fund } from "../entities/fund"

const fundos: Fund[] = [
  new Fund({
    id: "BTAL",
    ticker: "BTAL11",
    nomeFundo: "Btg Pactual Agro Logística",
    setor: "Agronegócio",
    tipo: "Tijolo"
  }),
  new Fund({
    id: "CPFF",
    ticker: "CPFF11",
    nomeFundo: "Capitânia REIT FOF",
    setor: "Fundo de Fundos",
    tipo: "FOF"
  }),
  new Fund({
    id: "IRDM",
    ticker: "IRDM11",
    nomeFundo: "Iridium Recebíveis Imobiliários",
    setor: "Recebíveis Imobiliários",
    tipo: "Papel"
  }),
  new Fund({
    id: "JSRE",
    ticker: "JSRE11",
    nomeFundo: "JS Real Estate Multigestão",
    setor: "Lajes Comerciais",
    tipo: "Tijolo"
  }),
  new Fund({
    id: "XPSF",
    ticker: "XPSF11",
    nomeFundo: "XP Selection",
    setor: "Fundo de Fundos",
    tipo: "FOF"
  })
]

export { fundos }
