import { calcMesesDecimoTerceiro } from "./calcMesesDecimoTerceiro";
export function decimoTerceiro(
  salario: number,
  dataAdmissao: string,
  dataDemissao: string
) {
  //trabalhador tem direito a 1/12 do 13º salário para cada mês completo trabalhado no ano da demissão.
  const mesesTrabalhadosNoAno:number = calcMesesDecimoTerceiro(
    dataAdmissao,
    dataDemissao
  );
  console.log(`Calc décimo tercerio ${mesesTrabalhadosNoAno}`)
  const decimoTerceiro = (salario / 12) * mesesTrabalhadosNoAno;

  return decimoTerceiro.toFixed(2);
}
