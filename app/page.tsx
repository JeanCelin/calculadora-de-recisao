'use client'
import About from "./components/About";
import CalcRecisorio from "./utils/calcRecisorio";

export default function Home() {
  const dataAdmissao = "2024-01-01";
  const dataDemissao = "2025-11-13";

  const salario = 10000;
  const faltas = 0; // Faltas Injustificadas desconta do saldo do salario
  const periodos= 0
  

  CalcRecisorio(dataAdmissao, dataDemissao, salario, faltas, periodos);

  return (
    <div>
      <main>
        <About />
      </main>
    </div>
  );
}
