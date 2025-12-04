import { calcMesesDecimoTerceiro } from "./calc-meses-decimo-terceiro";
import { Dados } from "@/app/types/dados";

export  function decimoTerceiro(dados: Dados) {
  console.log(dados);
  const { salario, dataAdmissao, dataDemissao } = dados;
  console.log(salario)
  //trabalhador tem direito a 1/12 do 13º salário para cada mês completo trabalhado no ano da demissão.
  const mesesTrabalhadosNoAno: number =  calcMesesDecimoTerceiro(
    dataAdmissao,
    dataDemissao
  );
  const decimoTerceiro = (salario / 12) * mesesTrabalhadosNoAno;

  return Number(decimoTerceiro.toFixed(2));
}
