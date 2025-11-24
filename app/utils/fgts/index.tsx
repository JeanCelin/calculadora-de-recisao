import { useDados } from "@/app/components/data-provider"
import { calcTempoTrabalhado } from "../tempo-trabalhado/calc-tempo-trabalhado"
import CalcFGTS from "./calc-fgts"
import FgtsMulta from "./calc-fgts-multa"
import FgtsDecimoTerceiro from "./calc-fgts-decimo-terceiro"
import FgtsSaldoSalario from "./calc-fgts-saldo-salario"
import FgtsTotalSaque from "./calc-total-fgts-saque"

export default function Fgts() {
  const {dataAdmissao, dataDemissao} = useDados()
  const taxaFGTS = 0.08;


  const tempoTrabalhado = calcTempoTrabalhado(dataAdmissao, dataDemissao)
  const fgtsDepositado = CalcFGTS(tempoTrabalhado, taxaFGTS)
  const fgtsSaldoSalario = FgtsSaldoSalario(taxaFGTS)
  const fgtsMulta = FgtsMulta(fgtsDepositado,fgtsSaldoSalario, taxaFGTS)
  const fgtsDecimoTerceiro =   FgtsDecimoTerceiro(taxaFGTS)
  const fgtsSaque = FgtsTotalSaque(fgtsDepositado,fgtsSaldoSalario, fgtsDecimoTerceiro, fgtsMulta)

  return (
    {fgtsDepositado, fgtsSaldoSalario, fgtsDecimoTerceiro, fgtsMulta, fgtsSaque}
  )
}