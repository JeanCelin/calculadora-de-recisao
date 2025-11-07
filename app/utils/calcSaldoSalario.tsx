import { dataLocalBrasil } from "./dataLocalBrasil";

export function saldoSalario(
  salario: number,
  dataDemissao: string,
  faltas: number
) {
  const data = dataLocalBrasil(dataDemissao)
 const diaDaDemissao = data.getDate()
  const valorDoDia = salario / 30;
  const diasTrabalhados = diaDaDemissao - faltas;

  console.log(diasTrabalhados);

  return (valorDoDia * diasTrabalhados).toFixed(2);
}
