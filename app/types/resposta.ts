export type Resposta = {
  demissao: string;
  aviso: string;

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
    fgtsTotalSaque: number | boolean;
  };
  deducao: {
    valorAviso: number | boolean;
    inss: number | boolean;
    inssDecimoTerceiro: number | boolean;
    irrf: number | boolean;
    totalDeducao: number | boolean;
  };
  totalLiquido: number;
};
