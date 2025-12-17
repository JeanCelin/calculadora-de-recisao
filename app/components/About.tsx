import CalcIcon from "../svgs/CalcIcon";
import ClockIcon from "../svgs/ClockIcon";
import ShieldIcon from "../svgs/ShieldIcon";
import Card from "./Card";
import Recipe from "./Recipe";

export default function About() {
  return (
    <section className=" bg-blue-100 flex flex-col content-center items-center px-4 py-10   text  ">
      {/* <header className="max-w-4xl flex flex-col gap-4 content-center items-center mb-11">
        <p className="title">
          Calcule o valor da sua recisão trabalhista em minutos
        </p>
        <p>
          Simples, rápido e gratuito. Descubra quanto você tem direito a receber
          ao encerrar seu contrato de trabalho.
        </p>
        <button className="btn btn-primary flex items-center ">
          <div className="w-4">
            <CalcIcon size={16} color="text-white" />
          </div>
          <p>Ir para a Calculadora</p>
        </button>
      </header> */}
      <section>
        <h2 className="title pb-4">Fórmulas</h2>
        <ol className="flex flex-col gap-6">
          <li>
            <Recipe
              title="Saldo de salário"
              recipe="Saldo = Salário/30 x Dias Trabalhados"
            />
          </li>
          <li>
            <Recipe
              title="Férias vencidas"
              recipe="Férias Vencidas = Salário x Periodos"
              explain={["1 periodos = 30 dias"]}
            />
          </li>
          <li>
            <Recipe
              title="Férias Proporcionais"
              recipe=" Férias Proporcionais = (salario / 12) * meses trabalhados no ano"
              explain={[
                "1 mes = 30 dias.",
                "Se 'sobrar' 15 dias ou mais trabalhados, é arrendondo para +1 mes, se não o mes não conta.",
                "Exemplo: Tempo trabalhado no ano: 7 meses e 17 dias. Meses trabalhados = 8 meses",
              ]}
            />
          </li>
          <li>
            <Recipe
              title="Décimo terceiro"
              recipe="Décimo terceiro = (salario / 12) * meses trabalhados no ano"
              explain={[
                "1 mes = 30 dias;",
                "Exemplo: Tempo trabalhado no ano: 7 meses e 17 dias.",
                "Meses trabalhados = 8 meses;",
                "Se 'sobrar'; 15 dias ou mais trabalhados, é arrendondo para +1 mes, se não o mes não conta.  Exemplo: Tempo trabalhado no ano: 9 meses e 13 dias. Meses trabalhados = 9 meses",
              ]}
            />
          </li>
        </ol>
      </section>
      {/* <div className="grid gap-6 pt-8 pb-8">
        <Card
          svg={<CalcIcon size={24}/>}
          title="Cálculo Preciso"
          text="Baseado na legislação trabalhista brasileira"
        />

        <Card
          svg={<ClockIcon size={24} />}
          title="Resultado Imediato"
          text="Saiba em segundos quanto você vai receber"
        />
        <Card
          svg={<ShieldIcon size={24} />}
          title="100% Gratuito"
          text="Sem custos, sem cadastro, sem compromisso"
        />
      </div> */}
    </section>
  );
}
