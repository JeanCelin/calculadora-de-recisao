/* Regras
  São férias que o trabalhador já tinha direito a tirar, mas ainda não tirou.

  O trabalhador adquire o direito a 30 dias de férias após 12 meses de trabalho (período aquisitivo).

  A empresa tem 12 meses seguintes (período concessivo) para conceder essas férias.

  Se a empresa não concede dentro do período concessivo, o valor deve ser pago em dobro, conforme o art. 137 da CLT.

  Todo pagamento de férias (vencidas ou não) deve incluir o acréscimo de 1/3 constitucional (art. 7º, XVII da CF).
*/
export function CalcferiasVencidas(salario: number, periodos: number = 0) {
  let feriasVencidas: number = 0
  
  if(periodos == 1){
    feriasVencidas = salario
  } if (periodos > 1) {
    feriasVencidas = salario * periodos
  }
  return feriasVencidas





  // let feriasVencidas: number = 0
  // if (!periodos )  feriasVencidas = salario * (4 / 3);
  // if (periodos)  feriasVencidas = salario * periodos * (4 / 3);

  // return Number(feriasVencidas.toFixed(2))
}
