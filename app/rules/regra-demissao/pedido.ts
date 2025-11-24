'use client'

import { useDados } from "@/app/components/data-provider";

import { DecimoTerceiro } from "@/app/utils/decimo-terceiro/calc-decimo-terceiro";
import { FeriasProporcionais } from "@/app/utils/ferias/calc-ferias-proporcinais";
import { CalcferiasVencidas } from "@/app/utils/ferias/calc-ferias-vencidas";
import { CalcUmTercoFerias } from "@/app/utils/ferias/calc-um-terco-ferias";
import Fgts from "@/app/utils/fgts";
import { saldoSalario } from "@/app/utils/saldo-salario/calc-saldo-salario";
import { Resposta } from "@/app/types/resposta";
import { TiposAviso } from "@/app/types/tiposAviso";


export default function Pedido(tiposAviso: TiposAviso, ) {
  const { salario, dataDemissao, faltas, feriasVencidasPeriodos } = useDados();

  const saldoSalarioReceber = saldoSalario(salario, dataDemissao, faltas);
  const decimoTerceiroSalario = DecimoTerceiro();
  // const feriasVencidasReceber = CalcferiasVencidas(salario, feriasVencidasPeriodos); // Se tiver
  const feriasProporcionaisReceber = FeriasProporcionais(
  );

  const { fgtsDepositado, fgtsSaldoSalario, fgtsDecimoTerceiro, fgtsMulta, fgtsTotalSaque } = Fgts();
  const feriasUmTerco = CalcUmTercoFerias(feriasProporcionaisReceber)
 
  const feriasVencidasReceber = feriasVencidasPeriodos ? CalcferiasVencidas(salario, feriasVencidasPeriodos) : 0;



  console.log(`------------------Demissao Pedida------------------`);
  console.log(`Saldo salário: R$${saldoSalarioReceber}`);
  console.log(`Férias Proporciais: R$${feriasProporcionaisReceber}`);
  console.log(`1/3 de Férias: R$${feriasUmTerco}`)
  console.log(`Férias Vencidas: R$${feriasVencidasReceber}`);
  console.log(`Décimo Terceiro Proporcional: R$${decimoTerceiroSalario}`);

  console.log(`------------------FGTS------------------`)
  console.log(`FGTS Depositado: R$${fgtsDepositado}`);
  console.log(`FGTS Saldo Salario: R$${fgtsSaldoSalario}`);
  console.log(`FGTS Décimo Terceiro: R$${fgtsDecimoTerceiro}`);

  const calculo: Resposta =  {
    demissao: "pedido",
    aviso: tiposAviso,
    verbas: {
      saldoSalario: saldoSalarioReceber,
      feriasProps: feriasProporcionaisReceber,
      umTercoFerias: feriasUmTerco,
      feriasVencidas: feriasVencidasReceber,
      decimoTerceiroSalario: decimoTerceiroSalario,
    },
    fgts: {
      fgtsDepositado: fgtsDepositado,
      fgtsSaldoSalario: fgtsSaldoSalario,
      fgtsDecimoTerceiro: fgtsDecimoTerceiro,
      fgtsMulta: fgtsMulta,
      fgtsTotalSaque: fgtsTotalSaque,
    }
  }
  return calculo

}
