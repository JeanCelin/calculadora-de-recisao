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
    <div
      className="pl-4 pr-4 pt-6 pb-6  border border-stone-50
     rounded-md bg-blue-50 shadow grid grid-cols-1 gap-6 ">
      <div className="">
        <div>
          <h2 className="title">Resultado do Calculo</h2>
          <p className="bg-white rounded-md p-4 text-center text-base font-bold ">{`R$ ${Number(totalLiquido).toFixed(2)}`}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="title">Verbas</h2>
        <div className="container ">
          <span className="key text">Saldo Salário:</span>
          <p className="value text2">{verbas.saldoSalario}</p>
        </div>
        <div className="container">
          <span className="key text">Férias Proporcionais:</span>
          <p className="value text2">{verbas.feriasProps}</p>
        </div>
        <div className="container">
          <span className="key text">Férais 1/3:</span>
          <p className="value text2">{verbas.feriasPropsUmTerco}</p>
        </div>
        <div className="container">
          <span className="key text">Férias Vencidas:</span>
          <p className="value text2">{verbas.feriasVencidas}</p>
        </div>
        <div className="container">
          <span className="key text">Férias Vencidas 1/3:</span>
          <p className="value text2">{verbas.feriasVencidasUmTerco}</p>
        </div>
        <div className="container">
          <span className="key text">Décimo Terceiro:</span>
          <p className="value text2">{verbas.decimoTerceiroSalario}</p>
        </div>
        <div className="container">
          <span className="key text">Valor Aviso:</span>
          <p className="value text2">{verbas.aviso}</p>
        </div>
        <div className="container total ">
          <span className="key ">Total Verbas:</span>
          <p className="value">{verbas.totalVerbas}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="title">FGTS Estimado</h2>
        <div className="container">
          <span className="key text">FGTS Depositado: </span>
          <p className="value text2">{fgts.fgtsDepositado}</p>
        </div>
        <div className="container">
          <span className="key text">FGTS Saldo Salário: </span>
          <p className="value text2">{fgts.fgtsSaldoSalario}</p>
        </div>
        <div className="container">
          <span className="key text">FGTS Multa:</span>
          <p className="value text2">{fgts.fgtsMulta}</p>
        </div>
        <div className="container total">
          <span className="key ">FGTS Saque Disponível: </span>
          <p className="value">{fgts.fgtsTotalSaque}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="title">DEDUÇÕES</h2>
        <div className="container">
          <span className="key text">INSS</span>
          <p className="value text2">{deducao.inss}</p>
        </div>
        <div className="container">
          <span className="key text">INSS Décimo Terceiro:</span>
          <p className="value text2">{deducao.inssDecimoTerceiro}</p>
        </div>
        <div className="container">
          <span className="key text">IRRF:</span>
          <p className="value text2">{deducao.irrf}</p>
        </div>
        <div className="container">
          <span className="key text">Aviso a Deduzir:</span>
          <p className="value text2">{deducao.valorAviso}</p>
        </div>
        <div className="container total">
          <span className="key ">Total a Deduzir:</span>
          <p className="value">{deducao.totalDeducao}</p>
        </div>
      </div>
    </div>
  );
}
