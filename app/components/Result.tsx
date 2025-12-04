import { Resposta } from "../types/resposta";
import { decimoTerceiro } from "../utils/decimo-terceiro/calc-decimo-terceiro";

export default function Result({
  result,
}: {
  result: Resposta | false | undefined;
}) {
  console.log(result);
  if (!result) {
    return (
      <p className="text-slate-500">
        Preencha o formulário e clique em calcular.
      </p>
    );
  }
  const {
    aviso,
    dataAdmissao,
    dataDemissao,
    demissao,
    deducao,
    fgts,
    totalLiquido,
    verbas,
  } = result;
  return (
    <div className="p-4 border rounded-md">
      <div>
        <h2>DADOS</h2>
        <p>
          <strong>Tipo de Demissão:</strong> {demissao}
        </p>
        <p>
          <strong>Tipo de Aviso:</strong> {aviso}
        </p>
        <p>
          <strong>Data Admissão:</strong> {dataAdmissao}
        </p>
        <p>
          <strong>Tipo de Demissão:</strong> {dataDemissao}
        </p>
      </div>
      <div>
        <h2>VERBAS</h2>
        <p>
          <strong>Saldo Salário:</strong> {verbas.saldoSalario}
        </p>
        <p>
          <strong>Férias Proporcionais:</strong> {verbas.feriasProps}
        </p>
        <p>
          <strong>Férais 1/3:</strong> {verbas.feriasPropsUmTerco}
        </p>
        <p>
          <strong>Férias Vencidas:</strong> {verbas.feriasVencidas}
        </p>
        <p>
          <strong>Férias Vencidas 1/3:</strong> {verbas.feriasVencidasUmTerco}
        </p>
        <p>
          <strong>Décimo Terceiro:</strong> {verbas.decimoTerceiroSalario}
        </p>
        <p>
          <strong>Valor Aviso:</strong> {verbas.aviso}
        </p>
        <p>
          <strong>Total Verbas:</strong> {verbas.totalVerbas}
        </p>
      </div>
      <div>
        <h2>FGTS:</h2>
        <p>
          <strong>FGTS Saldo Salário: </strong>
          {fgts.fgtsSaldoSalario}
        </p>
        <p>
          <strong>FGTS Depositado: </strong>
          {fgts.fgtsDepositado}
        </p>
        <p>
          <strong>FGTS Multa:</strong>
          {fgts.fgtsMulta}
        </p>
        <p>
          <strong>FGTS Saque Disponível: </strong>
          {fgts.fgtsTotalSaque}
        </p>
      </div>
      <div>
        <h2>DEDUÇÕES</h2>
        <p>
          <strong>INSS:</strong> {deducao.inss}
        </p>
        <p>
          <strong>INSS Décimo Terceiro:</strong> {deducao.inssDecimoTerceiro}
        </p>
        <p>
          <strong>IRRF:</strong> {deducao.irrf}
        </p>
        <p>
          <strong>Aviso a Deduzir:</strong> {deducao.valorAviso}
        </p>
        <p>
          <strong>Total a Deduzir:</strong> {deducao.totalDeducao}
        </p>
      </div>
      <div>
        <strong>Total Líquido:</strong> {totalLiquido}
      </div>
    </div>
  );
}
