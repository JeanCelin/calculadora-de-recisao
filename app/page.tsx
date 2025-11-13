import About from "./components/About";
import CalcRecisorio from "./utils/calcRecisorio";

export default function Home() {
  const dataAdmissao = "2024-11-01";
  const dataDemissao = "2025-11-13";

  const salario = 10000;
  const faltas = 0; // Faltas Injustificadas desconta do saldo do salario
  const periodos= 0
  const fgtsMulta = false

  CalcRecisorio(dataAdmissao, dataDemissao, salario, faltas, periodos, fgtsMulta);

  return (
    <div>
      <main>
        <About />
      </main>
    </div>
  );
}
