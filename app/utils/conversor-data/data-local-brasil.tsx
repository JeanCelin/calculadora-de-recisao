
export function dataLocalBrasil(dataString: string): Date {
  const [ano, mes, dia] = dataString.split("-").map(Number);
  return new Date(ano, mes - 1, dia);
}
