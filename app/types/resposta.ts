export type Resposta = {
    demissao: string,
    aviso: string,
    verbas: {
      saldoSalario: number,
      feriasProps: number,
      umTercoFerias: number,
      feriasVencidas: number | boolean,
      decimoTerceiroSalario: number | boolean,
    },
    fgts: {
      fgtsDepositado: number | boolean,
      fgtsSaldoSalario: number | boolean,
      fgtsDecimoTerceiro: number | boolean,
      fgtsMulta: number | boolean,
      fgtsTotalSaque: number | boolean,
    }
    descontos: {
      inss: number | boolean,
    }
}