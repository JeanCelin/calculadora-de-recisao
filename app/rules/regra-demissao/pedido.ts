'use client'

import { useDados } from "@/app/components/data-provider";

import { DecimoTerceiro } from "@/app/utils/decimo-terceiro/calc-decimo-terceiro";
import { feriasProporcionais } from "@/app/utils/ferias/calc-ferias-proporcinais";
import { feriasVencidas } from "@/app/utils/ferias/calc-ferias-vencidas";
import Fgts from "@/app/utils/fgts";
import { saldoSalario } from "@/app/utils/saldo-salario/calc-saldo-salario";
import { calcTempoTrabalhado } from "@/app/utils/tempo-trabalhado/calc-tempo-trabalhado";

export default function Pedido() {
  const { salario, dataAdmissao, dataDemissao, faltas, periodos } = useDados();

  const tempoTrabalhado = calcTempoTrabalhado(dataAdmissao, dataDemissao);

  const saldoSalarioReceber = saldoSalario(salario, dataDemissao, faltas);
  const decimoTerceiroSalario = DecimoTerceiro();
  const feriasVencidasReceber = feriasVencidas(salario, periodos); // Se tiver
  const feriasProporcionaisReceber = feriasProporcionais(
    salario,
    tempoTrabalhado
  );
  const { fgtsBase, fgtsSaldoSalario, fgtsDecimoTerceiro } = Fgts();

  console.log(`------------------Demissao Pedida------------------`);
  console.log(`${saldoSalarioReceber}`);
  console.log(`${decimoTerceiroSalario}`);
  console.log(`${feriasVencidasReceber}`);
  console.log(`${feriasProporcionaisReceber}`);
  console.log(`${fgtsBase}`);
  console.log(`${fgtsSaldoSalario}`);
  console.log(`${fgtsDecimoTerceiro}`);
}
