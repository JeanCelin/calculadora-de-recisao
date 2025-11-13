type TempoTrabalhado = {
  anos: number;
  meses: number;
  dias: number;
}

/* 
Regras

São férias que ainda estão sendo “acumuladas”.
Todo mês que o trabalhador trabalha, ele acumula 1/12 (um doze avos) de direito a férias. 

Observação importante sobre dias incompletos
Se o trabalhador não completou o mês inteiro, a regra é:
- Se trabalhou mais de 14 dias, conta como 1 mês.
- Se trabalhou menos de 15 dias, não conta.
*/


export function feriasProporcionais(
  salario: number,
  tempoTrabalhado: TempoTrabalhado
) {
  const { meses, dias } = tempoTrabalhado
  console.log(`---------------Calc ferias Proporcionais ---------------`)
  //Calculo para arredondar os numero de mes trabalhado
  let mesesServRond = dias > 14 ? meses + 1 : meses;
  console.log(`Porpriedades recebidas: salario: ${salario}, tempoTrabalhado ${tempoTrabalhado.meses}`)

  // Não existem meses maiores que 12, essa condição evita input errado e "puxa" o numero de meses para 12 caso maior.
  if (mesesServRond > 12) mesesServRond = 12;

  // Calculo da proporção das ferias
  const ferias = (salario / 12) * mesesServRond;

  // Sobra a proporção com o valor das férias
  const feriasProp = ferias * 4/3;
  
  return feriasProp;
}
