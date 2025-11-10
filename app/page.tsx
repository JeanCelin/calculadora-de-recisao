import About from "./components/About";
import { calcTempoTrabalhado } from "./utils/calcTempoTrabalhado";
import { avisoPrevio } from "./utils/calcAvisoPrevio";
import { feriasProporcionais } from "./utils/calcFeriasProporcinais";
import { feriasVencidas } from "./utils/calcFeriasVencidas";
import { saldoSalario } from "./utils/calcSaldoSalario"
import { decimoTerceiro} from './utils/calcDecimoTerceiro';

export default function Home() {
  const dataAdmissao = "2025-01-29"
  const dataDemissao = "2025-09-30"
  const tempoTrabalhado = calcTempoTrabalhado(dataAdmissao, dataDemissao);

  const salario = 3000;
  const faltas = 0 // Faltas Injustificadas desconta do saldo do salario

  console.log(
    `tempo trabalhado: ${tempoTrabalhado.anos} anos ${tempoTrabalhado.meses} meses ${tempoTrabalhado.dias} dias`
  );
  console.log(`aviso prévio: ${avisoPrevio(salario, tempoTrabalhado)}`);
  console.log(`ferias proporcionais ${feriasProporcionais(salario, tempoTrabalhado)}`)
  console.log(`ferias vencidas: ${feriasVencidas(salario, 2)}`)
  console.log(`Saldo de Salario ${saldoSalario(salario, dataDemissao, faltas)}`)
  console.log(`Décimo terceiro: ${decimoTerceiro(salario, dataAdmissao, dataDemissao)}`)

  return (
    <div>
      <main>
        <About />
      </main>
    </div>
  );
}
