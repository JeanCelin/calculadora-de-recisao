import { dataLocalBrasil } from "../conversor-data/data-local-brasil";

export function saldoSalario(
  salario: number,
  dataDemissao: string,
  faltas?: number,
  disable?: boolean
) {
  if (!disable) {
    const data = dataLocalBrasil(dataDemissao);
    const diaDaDemissao = data.getDate();
    const valorDoDia = salario / 30;
    let diasTrabalhados;

    if (faltas) {
      diasTrabalhados = valorDoDia * (diaDaDemissao - faltas);
      return Number(diasTrabalhados.toFixed(2));
    } else {
      return Number((diasTrabalhados = valorDoDia * diaDaDemissao).toFixed(2));
    }
  } else {
    return Number(0);
  }
}
