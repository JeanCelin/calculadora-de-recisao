import { dataLocalBrasil } from "../conversor-data/data-local-brasil";

export function calcTempoTrabalhado(inicio: string, fim: string) {
  const dataInicio = dataLocalBrasil(inicio);
  const dataFim = dataLocalBrasil(fim);

  let anos = dataFim.getFullYear() - dataInicio.getFullYear();
  let meses = dataFim.getMonth() - dataInicio.getMonth();
  let dias = dataFim.getDate() - dataInicio.getDate();

  if (dias < 0) {
    meses -= 1;
    const ultimoDiaMesAnterior = new Date(
      dataFim.getFullYear(),
      dataFim.getMonth(),
      0
    ).getDate();
    dias += ultimoDiaMesAnterior;
  }

  // Ajusta meses negativos
  if (meses < 0) {
    anos -= 1;
    meses += 12;
  }

  return {
    anos,
    meses,
    dias,
  };
}
