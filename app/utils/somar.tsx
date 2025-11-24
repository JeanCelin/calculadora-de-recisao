export function somar(...numeros: number[]): number {
  console.log(numeros.reduce((total, n) => total + n, 0));
  return Number(numeros.reduce((total, n) => total + n, 0).toFixed(2));
}
