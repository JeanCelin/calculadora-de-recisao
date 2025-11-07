const sal: number = 2000; //Salario
const feriasVencidas: boolean = true; //Tem ferias vencidas?
const mesesTrabalhadosDepoisFerias = 8; // Meses trabalhados depois da ultima ferias
const dts = 0; //diasTrabalhadosNaSaida
const mesesTrabalhadosAno: number = 11;

function feriasVenc(sal: number) {
  const umTerco = sal / 3;
  return sal + umTerco;
}
function feriasProp(sal: number, mesesTrabalhados: number) {
  const umTerco = sal / 3;
  const salProp = (sal / 12) * mesesTrabalhados;
  return salProp + umTerco;
}

//Saldo de Salario dos dias trabalhados
function saldoSalario(sal: number, dts: number) {
  return (sal / 30) * dts;
}

function decimoTerceiroProp(sal: number, mesesTrabalhadosAno: number) {
  return (sal / 12) * mesesTrabalhadosAno;
}

function calc(
  sal: number,
  feriasVencidas: boolean,
  dts: number,
  mesesTrabalhadosAno: number,
  mesesTrabalhadosDepoisFerias: number
) {
  const saldo = saldoSalario(sal, dts);

  const ferias = feriasVencidas
    ? feriasVenc(sal)
    : feriasProp(sal, mesesTrabalhadosDepoisFerias);

  const decimoTerceiro = decimoTerceiroProp(sal, mesesTrabalhadosAno);
  const total = saldo + ferias + decimoTerceiro;
  return total;
}

console.log(
calc(sal, feriasVencidas, dts, mesesTrabalhadosAno, mesesTrabalhadosDepoisFerias)
);
