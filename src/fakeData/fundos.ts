import { Fundo } from '../entities/fundo';

const fundos: Fundo[] = [
  new Fundo(
    'BTAL',
    'BTAL11',
    'Btg Pactual Agro Logística',
    'Agronegócio',
    'Tijolo'
  ),
  new Fundo('CPFF', 'CPFF11', 'Capitânia REIT FOF', 'Fundo de Fundos', 'FOF'),
  new Fundo(
    'IRDM',
    'IRDM11',
    'Iridium Recebíveis Imobiliários',
    'Recebíveis Imobiliários',
    'Papel'
  ),
  new Fundo(
    'JSRE',
    'JSRE11',
    'JS Real Estate Multigestão',
    'Lajes Comerciais',
    'Tijolo'
  ),
  new Fundo('XPSF', 'XPSF11', 'XP Selection', 'Fundo de Fundos', 'FOF'),
];

export { fundos };
