export function calcFgtsMulta(
  fgtsDepositado: number,
  fgtsSaldoSalario: number,
  fgtsDecimoTerceiro: number
) {
  const fgtsTaxaMulta = 0.4;

  return Number(((fgtsDepositado + fgtsSaldoSalario + fgtsDecimoTerceiro) * fgtsTaxaMulta).toFixed(2));
}
