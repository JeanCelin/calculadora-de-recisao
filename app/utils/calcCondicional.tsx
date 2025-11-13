import type { Recisao } from "@/app/types/recisao";
import type { TempoTrabalhado } from "../types/tempoTrabalhado";
import { decimoTerceiro } from "./calcDecimoTerceiro";
import { feriasProporcionais } from "./calcFeriasProporcinais";
import { feriasVencidas } from "./calcFeriasVencidas";
import CalcFGTS from "./calcFGTS";
import { saldoSalario } from "./calcSaldoSalario";
import { AvisoPrevio } from "../types/avisoPrevio";

export default function calcCondicional(
  recisao: Recisao,
  salario: number,
  dataAdmissao: string,
  dataDemissao: string,
  faltas: number,
  tempoTrabalhado: TempoTrabalhado,
  periodos: number,
  fgtsMulta: boolean,
  avisoPrevio: AvisoPrevio,
) {
  const arrayCalc = [];

  if(avisoPrevio === AvisoPrevio.Trabalhado) {
     console.log('aviso previo trabalhado')
  } if( avisoPrevio === AvisoPrevio.IndenizadoPeloEmpregador){
     console.log(`Aviso prévio indenizado`)
  }

  if (recisao.decimoTerceiro) {
    arrayCalc.push(Number(decimoTerceiro(salario, dataAdmissao, dataDemissao)));
       console.log(
      ` ---  Décino Terceiro R$ ${Number(decimoTerceiro(salario, dataAdmissao, dataDemissao))}`
    );
  }
  if (recisao.feriasProporcionais) {
    arrayCalc.push(feriasProporcionais(salario, tempoTrabalhado));
         console.log(
      ` ---  Ferias Proporcionais R$ ${feriasProporcionais(salario, tempoTrabalhado)}`
    );
  }

  if (recisao.feriasVencidas) {
    arrayCalc.push(feriasVencidas(salario, periodos));
        console.log(
      ` ---  Ferias Vencidas R$ ${feriasVencidas(salario, periodos)}`
    );
  }

  if (recisao.fgts) {
    arrayCalc.push(CalcFGTS(salario, tempoTrabalhado, fgtsMulta));
    console.log(
      ` ---  FGTS R$ ${CalcFGTS(salario, tempoTrabalhado, fgtsMulta)}`
    );
  }

  if (recisao.saldoSalario) {
    arrayCalc.push(saldoSalario(salario, dataDemissao, faltas));
    console.log(
      ` --- Saldo salário R$ ${saldoSalario(salario, dataDemissao, faltas)}`
    );
  }

  const newArray = arrayCalc.map((element) => {
    return Number(element);
  });

  const total = newArray.reduce(
      (acumulador, valorAtual) => acumulador + valorAtual,
      0
    )

  console.log(
    `Total R$ ${total.toFixed(2)}`
  );
}
