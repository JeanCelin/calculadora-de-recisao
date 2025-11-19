export function calcMesesDecimoTerceiro(
  dataAdmissao: string,
  dataDemissao: string
) {
  const admissao = new Date(dataAdmissao);
  const demissao = new Date(dataDemissao);

  // 🧠 Se o funcionário foi admitido e demitido no mesmo mês e ano:
  if (
    admissao.getFullYear() === demissao.getFullYear() &&
    admissao.getMonth() === demissao.getMonth()
  ) {
    const diasTrabalhados = demissao.getDate() - admissao.getDate() + 1;
    if (diasTrabalhados < 15) return 0; // Sai da função imediatamente
  }

  const anoDemissao = demissao.getFullYear();
  const mesInicio =
    admissao.getFullYear() === anoDemissao ? admissao.getMonth() + 1 : 1;
  const mesFim = demissao.getMonth() + 1;
  const diaDemissao = demissao.getDate();

  let mesesTrabalhados = mesFim - mesInicio + 1;

  // Se o mês da demissão teve menos de 15 dias trabalhados, não conta
  if (diaDemissao < 15) mesesTrabalhados -= 1;

  if (mesesTrabalhados < 0) mesesTrabalhados = 0;

  return mesesTrabalhados;
}
