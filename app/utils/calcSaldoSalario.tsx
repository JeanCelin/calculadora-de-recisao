import { dataLocalBrasil } from "./dataLocalBrasil";

export function saldoSalario(
  salario: number,
  dataDemissao: string,
  faltas?: number
) {
  const data = dataLocalBrasil(dataDemissao);
  const diaDaDemissao = data.getDate();
  const valorDoDia = salario / 30;
  let diasTrabalhados;

  if (faltas) {
    diasTrabalhados = valorDoDia * (diaDaDemissao - faltas);
    return diasTrabalhados.toFixed(2);
  } else {
    return (diasTrabalhados = valorDoDia * diaDaDemissao).toFixed(2);
  }


}
