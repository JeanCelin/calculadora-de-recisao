export type Resposta = {
    demissao: string,
    aviso: string,
    verbas: {
      saldoSalario: number,
      feriasProps: number,
      umTercoFerias: number,
      feriasVencidas: number | boolean,
      decimoTerceiroSalario: number | boolean,
      totalVerbas: number,
    },
    fgts: {
      fgtsDepositado: number | boolean,
      fgtsSaldoSalario: number | boolean,
      fgtsDecimoTerceiro: number | boolean,
      fgtsMulta: number | boolean,
      fgtsTotalSaque: number | boolean,
    }
    deducao: {
      inss: number | boolean,
      inssDecimoTerceiro: number| boolean,
      irrf: number | boolean,
      totalDeducao: number | boolean,
    }
    totalLiquido: number
}