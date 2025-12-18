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
        <h2 className="title pb-4">O que são os campos do cálculo?</h2>
        <div className="flex flex-col gap-2">
          <h3 className="title">O que é Saldo de Salário?</h3>
          <div className="flex flex-col gap-3">
            <p>
              O saldo de salário é a parcela a receber equivalente aos dia
              trabalhados no mês da recisão.
            </p>
            <p>
              Por exemplo: alguém que encerrou seus serviços para uma empresa no
              dia 14 de Maio de 2025 e recebia R$2.000,00.
            </p>
            <p>Aplicamos a fórmula: (Saldo = Salário/30 x Dias trabalhados)</p>
            <p>
              Saldo de Salario = 2000/30 x 14 (Saiu no dia 14 de Maio) Saldo de
              Salário = R$ 933,33
            </p>
            <p>
              Ao deixar a empresa o trabalhador terá R$ 933,33 de saldo de
              salário.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="title">
              O que são férias vencidas e férias 1/3 (Um terço)?
            </h3>
            <div className="flex flex-col gap-3">
              <p>
                A cada 12 meses de trabalho, o funcionário adquire o direito a
                um período de férias remuneradas, normalmente de 30 dias, com o
                pagamento do salário acrescido de 1/3 constitucional.
              </p>
              <p>
                Após completar esses 12 meses (período aquisitivo), a empresa
                tem até mais 12 meses para conceder essas férias ao trabalhador.
                Esse segundo período é chamado de período concessivo.
              </p>
              <p>
                As férias vencidas ocorrem quando a empresa não concede as
                férias dentro do período concessivo. Nesse caso, a CLT determina
                que o empregado deve receber as férias em dobro, ou seja:
              </p>
            </div>
          </div>
        </div>

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
