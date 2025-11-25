import { FaixaImposto } from "../types/faixaImposto";

export const faixasIRRF: FaixaImposto[] = [
  { min: 0,          max: 2428.80, aliquota: 0, deduzir: 0 },
  { min: 2428.81,    max: 2826.65, aliquota: 0.75, deduzir: 182.16 },
  { min: 2826.66,    max: 3751.05, aliquota: 0.15, deduzir: 394.16 },
  { min: 3751.06,    max: 4664.68, aliquota: 0.225, deduzir: 675.49 },
  { min: 4664.69,    max: 10000000000, aliquota: 0.275, deduzir: 908.73 },
];