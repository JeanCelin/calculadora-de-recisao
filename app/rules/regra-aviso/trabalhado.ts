/* Aviso Prévio Trabalhado

O funcionário cumpre os dias de aviso indo trabalhar normalmente.

Duração: 30 dias, podendo aumentar conforme tempo de casa.

Salário é pago normalmente.

Pode haver redução de jornada:

2h a menos por dia, ou

7 dias corridos a menos no fim. */

export default function AvisoTrabalhado(salario: number, diasAviso: number = 30) {
  if (salario && diasAviso) {
    const aviso: number = (salario / 30) * diasAviso;
    return Number(aviso);
  }
}
