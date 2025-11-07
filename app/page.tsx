import About from "./components/About";
import { feriasVencidas } from "./utils/calcFeriasVencidas";
import { feriasProporcionais } from "./utils/calcFeriasProporcinais";

export default function Home() {
  const salario = 2400;
  const mesesTrabalhados = 8;
  const diasTrabalhados = 20;

 
  console.log(feriasProporcionais(salario, mesesTrabalhados, diasTrabalhados));

  return (
    <div>
      <main>
        <About />
      </main>
    </div>
  );
}
