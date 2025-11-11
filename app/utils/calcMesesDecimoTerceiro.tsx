export function calcMesesDecimoTerceiro(
  dataAdmissao: string,
  dataDemissao: string
) {
  //trabalhador tem direito a 1/12 do 13º salário para cada mês completo trabalhado no ano da demissão.
  const admissao = new Date(dataAdmissao);
  const demissao = new Date(dataDemissao);

  const anoDemissao = demissao.getFullYear();

  const mesInicio =
    admissao.getFullYear() === anoDemissao ? admissao.getMonth() + 1 : 1;
  const mesFim = demissao.getMonth() + 1; //Porque getMonth retorna os meses de 0-11 onde 0 é janeiro e 11 é dezembro
  const diaDemissao = demissao.getDate();

  let mesesTrabalhados = mesFim - mesInicio;
  //Se tiver mais de 14 dias no último mês, conta como mês cheio.

  // Se o mes da demissao teve 15 dias ou mais de trabalho, adiciona mais 1 mes
  if (diaDemissao < 15) mesesTrabalhados -= 1;

  // Correção caso  o funcionario tenha sido demitido no fim do ano anterior
  if (mesesTrabalhados < 0) mesesTrabalhados += 12;

  console.log(`meses trabalhados ${mesesTrabalhados}`);
  return mesesTrabalhados;
}
