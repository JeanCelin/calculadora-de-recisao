import { FaixaImposto } from "../types/faixaImposto";

export const faixasINSS: FaixaImposto[] = [
  { min: 0,          max: 1518.00, aliquota: 0.075, deduzir: 0 },
  { min: 1518.01,    max: 2793.88, aliquota: 0.09, deduzir: 22.77 },
  { min: 2793.89,    max: 4190.83, aliquota: 0.12, deduzir: 106.59 },
  { min: 4190.84,    max: 8157.41, aliquota: 0.14, deduzir: 190.40 },
];