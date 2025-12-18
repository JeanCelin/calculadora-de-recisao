export type Resposta = {
  demissao: string;
  aviso: string;
  dataAdmissao: string;
  dataDemissao: string;
  verbas: {
    saldoSalario: number;
    feriasVencidas: number;
    feriasVencidasUmTerco: number;
    feriasProps: number | boolean;
    feriasPropsUmTerco: number | boolean;
    decimoTerceiroSalario: number | boolean;
    aviso: number | boolean
    totalVerbas: number;
  };
  fgts: {
    fgtsDepositado: number | boolean;
    fgtsSaldoSalario: number | boolean;
    fgtsDecimoTerceiro: number | boolean;
    fgtsMulta: number | boolean;
    fgtsTotal: number;
    fgtsSaqueDisponivel: number | boolean;
  };
  deducao: {
    valorAviso: number | boolean;
    inss: number | boolean;
    inssDecimoTerceiro: number | boolean;
    irrf: number | boolean;
    irrfDecimoTerceiro: number;
    totalDeducao: number | boolean;
  };
  totalLiquido: number;
};
