export type Resposta = {
  demissao: string;
  aviso: string;

  verbas: {
    saldoSalario: number;
    feriasVencidas: number;
    feriasVencidasUmTerco: number;
    feriasProps: number;
    feriasPropsUmTerco: number;
    decimoTerceiroSalario: number | boolean;
    aviso: number | boolean
    totalVerbas: number;
  };
  fgts: {
    fgtsDepositado: number | boolean;
    fgtsSaldoSalario: number | boolean;
    fgtsDecimoTerceiro: number | boolean;
    fgtsMulta: number | boolean;
    fgtsTotalSaque: number | boolean;
  };
  deducao: {
    valorAviso: number;
    inss: number | boolean;
    inssDecimoTerceiro: number | boolean;
    irrf: number | boolean;
    totalDeducao: number | boolean;
  };
  totalLiquido: number;
};
