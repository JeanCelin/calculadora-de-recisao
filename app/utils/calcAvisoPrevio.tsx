export function avisoPrevio(salario: number, diasTrabalhados: number): number {
  const anosTrabalhados = Math.floor(diasTrabalhados / 365);

  // Regra: 30 dias de aviso + 3 dias por ano trabalhado, até no máximo 90
  const diasAviso = Math.min(30 + 3 * Math.max(0, anosTrabalhados - 1), 90);

  // Se trabalhou menos de 30 dias, não tem aviso prévio
  if (diasTrabalhados < 30) return 0;

  // Valor proporcional ao número de dias de aviso
  const valorAviso = (salario / 30) * diasAviso;

  return Number(valorAviso.toFixed(2));
}