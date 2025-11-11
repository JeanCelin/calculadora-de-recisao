import About from "./components/About";
import CalcRecisorio from "./utils/calcRecisorio";

export default function Home() {
  const dataAdmissao = "2025-04-01";
  const dataDemissao = "2025-06-25";

  const salario = 3000;
  const faltas = 0; // Faltas Injustificadas desconta do saldo do salario

  const pedidoDemissao: string = "pedidoPeloFuncionario";

  CalcRecisorio(dataAdmissao, dataDemissao, salario, faltas, pedidoDemissao);

  return (
    <div>
      <main>
        <About />
      </main>
    </div>
  );
}
