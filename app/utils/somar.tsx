export function somar(...numeros: number[]): number {
  return Number(numeros.reduce((total, n) => total + n, 0).toFixed(2));
}
