import { dataLocalBrasil } from "../conversor-data/data-local-brasil";

export function calcFgtsSaldoSalario(
  taxaFGTS: number,
  salario: number,
  dataDemissao: string
) {
  const data = dataLocalBrasil(dataDemissao);
  const ultimoDiaTrabalhado = data.getDate();

  return Number(((salario / 30) * ultimoDiaTrabalhado * taxaFGTS).toFixed(2));
}
