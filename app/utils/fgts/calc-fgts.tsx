type TempoTrabalhado = {
  anos: number;
  meses: number;
  dias: number;
};

export function calcFGTS(
  tempoTrabalhado: TempoTrabalhado, taxaFGTS: number, salario: number
) {

  const { anos, meses } = tempoTrabalhado;

  

  let mesesTotais: number = meses;

  if (anos >= 1) {
    mesesTotais += anos * 12;
  }

  //Empregador deve depositar 8% do salario bruto todo mes para o FGTS
  const fgtsBase = salario * taxaFGTS * mesesTotais;

  return  fgtsBase ;
}
