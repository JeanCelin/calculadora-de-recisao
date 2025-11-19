type TempoTrabalhado = {
  anos: number;
  meses: number;
  dias: number;
}

export function avisoPrevio(salario: number, tempoTrabalhado: TempoTrabalhado): number {

  const { anos, meses, dias } = tempoTrabalhado

  // Regra: 30 dias de aviso + 3 dias por ano trabalhado, até no máximo 90
  const diasAviso = Math.min(30 + 3 * Math.max(0, anos - 1), 90);

  // Se trabalhou menos de 30 dias, não tem aviso prévio
  if (dias < 30 && meses === 0 && anos === 0) return 0

  // Valor proporcional ao número de dias de aviso
  const valorAviso = (salario / 30) * diasAviso;

  return Number(valorAviso.toFixed(2));
}