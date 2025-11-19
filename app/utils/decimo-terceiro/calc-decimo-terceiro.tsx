import { useDados } from "@/app/components/data-provider";
import { calcMesesDecimoTerceiro } from "./calc-meses-decimo-terceiro";
export function DecimoTerceiro() {
  const {salario, dataAdmissao, dataDemissao} = useDados()
  //trabalhador tem direito a 1/12 do 13º salário para cada mês completo trabalhado no ano da demissão.
  const mesesTrabalhadosNoAno: number = calcMesesDecimoTerceiro(
    dataAdmissao,
    dataDemissao
  );
  const decimoTerceiro = (salario / 12) * mesesTrabalhadosNoAno;

  return decimoTerceiro.toFixed(2);
}
