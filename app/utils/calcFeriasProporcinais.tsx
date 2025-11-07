export function feriasProporcionais(
  salario: number,
  mesesServ: number,
  diasServ: number
) {
  let mesesServCalc = diasServ > 14 ? mesesServ + 1 : mesesServ;
  if (mesesServCalc > 12) mesesServCalc = 12;

  const ferias = (salario / 12) * mesesServCalc;
  const feriasProp = ferias * (4/3);
  
  return feriasProp;
}
