type TempoTrabalhado = {
  anos: number;
  meses: number;
  dias: number;
}

export default function CalcFGTS(salario: number, tempoTrabalhado: TempoTrabalhado, multa?: boolean) {

  const { anos, meses, dias } = tempoTrabalhado;

  let mesesTotais:number = meses

  if(anos >= 1) {
   mesesTotais += (anos * 12)
  } 

  //Empregador deve depositar 8% do salario bruto todo mes para o FGTS
  const fgtsBase = salario * 0.08 * mesesTotais;
  const fgtsMulta = 0.4
  const fgtsBruto = multa ? fgtsBase *  fgtsMulta : fgtsBase
  
  return fgtsBruto;
}
