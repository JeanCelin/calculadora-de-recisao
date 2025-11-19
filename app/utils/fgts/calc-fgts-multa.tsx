export default function FgtsMulta(
  fgtsBase: number,
  fgtsSaldoSalario: number,
  fgtsDecimoTerceiro: number
) {
  const fgtsTaxaMulta = 0.4;

  return (fgtsBase + fgtsSaldoSalario + fgtsDecimoTerceiro) * fgtsTaxaMulta;
}
