'use client'

import { useDados } from "@/app/components/data-provider";

import { DecimoTerceiro } from "@/app/utils/decimo-terceiro/calc-decimo-terceiro";
import { FeriasProporcionais } from "@/app/utils/ferias/calc-ferias-proporcinais";
import { feriasVencidas } from "@/app/utils/ferias/calc-ferias-vencidas";
import { CalcUmTercoFerias } from "@/app/utils/ferias/calc-um-terco-ferias";
import Fgts from "@/app/utils/fgts";
import { saldoSalario } from "@/app/utils/saldo-salario/calc-saldo-salario";


export default function Pedido() {
  const { salario, dataDemissao, faltas, periodos } = useDados();

  const saldoSalarioReceber = saldoSalario(salario, dataDemissao, faltas);
  const decimoTerceiroSalario = DecimoTerceiro();
  const feriasVencidasReceber = feriasVencidas(salario, periodos); // Se tiver
  const feriasProporcionaisReceber = FeriasProporcionais(
  );

  const { fgtsDepositado, fgtsSaldoSalario, fgtsDecimoTerceiro } = Fgts();
  const feriasUmTerco = CalcUmTercoFerias(feriasProporcionaisReceber)
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
  
}
