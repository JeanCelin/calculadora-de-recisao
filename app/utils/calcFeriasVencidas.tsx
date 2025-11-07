export function feriasVencidas(salario: number, periodo?: number) {
  let feriasVencidas;
  (feriasVencidas = salario / 3 + salario).toFixed(2);
  if (!periodo) {
    return feriasVencidas;
  } else {
    (feriasVencidas = feriasVencidas * periodo).toFixed(2);
    return feriasVencidas;
  }
}
