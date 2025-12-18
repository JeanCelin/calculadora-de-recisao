import CalcIcon from "../svgs/CalcIcon";
import ClockIcon from "../svgs/ClockIcon";
import ShieldIcon from "../svgs/ShieldIcon";
import Card from "./Card";
import Recipe from "./Recipe";

export default function About() {
  return (
    <section className=" flex flex-col content-center items-center px-4 py-10   text  ">
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
            <h3 className="title">O que são férias vencidas?</h3>
            <div className="flex flex-col gap-3">
              <p>
                As férias vencidas ocorrem quando o empregado adquire o direito
                às férias, mas a empresa não concede esse descanso dentro do
                prazo legal.
              </p>
              <p>
                Pela CLT, a cada 12 meses de trabalho o funcionário completa um
                período aquisitivo, passando a ter direito a férias remuneradas.
                Após isso, a empresa tem mais 12 meses para conceder essas
                férias (periodo concessivo).
              </p>
              <p>
                Se esse prazo termina e o funcionário não tirou férias, elas
                passam a ser consideradas férias vencidas.
              </p>
              <p>
                Quando as férias não são concedidas dentro do período
                concessivo, a CLT determina que o pagamento seja feito em dobro,
                como forma de penalidade à empresa. Esse pagamento em dobro já
                se aplica no primeiro período vencido e vale para cada período
                que estiver em atraso.
              </p>
              <p>
                Exemplo: <br />
                Imagine um funcionário com salário de R$ 3.000,00 que trabalhou
                de janeiro de 2023 a dezembro de 2023 completando o período
                aquisitivo. A empresa tinha até dezembro de 2024 para conceder
                as férias, mas elas não foram concedidas.
              </p>
              <p>Ferias vencidas = (3.000 + (3000 / 3))</p>
              <p>Férias vencidas = 4000 * 2</p>
              <p>Férias vencidas = 8.000</p>
              <p>
                Então a empresa deve pagar ao funcionário o valor de R$8.000,00
                referente as férias vencidas.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="title">O que são férias proporcionais?</h3>
            <div className="flex flex-col gap-3">
              <p>
                As férias proporcionais é o pagamento proporcional ao tempo de
                serviço prestado, quando o trabalhador não completou o período
                aquisitivo de 12 meses.
              </p>
              <p>
                Para fins de cálculo, meses trabalhados acima de 14 dias podem
                ser contados como mês completo para o cálculo.
              </p>
              <p>Exemplo: Salário: 2000, trabalhou 7 meses</p>
              <p>
                Aplicar a fórmula: (Salário / 12) x número de meses trabalhados
              </p>
              <p>Férias proporcionais = 2000 / 12 * (7) = R$ 1.166,66</p>
              <p>
                Nesse exemplo, o trabalhador tem direito a receber R$1.166,66
                referentes às férias proporcionais.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="title">O que é o décimo terceiro proporcional?</h3>
            <div className="flex flex-col gap-3">
              <p>
                O décimo terceiro proporcional é o valor devido
                proporcionalmente aos meses efetivamente trabalhados pelo
                empregado durante o ano.
              </p>
              <p>
                O colaborador tem direito a receber o décimo terceiro
                proporcional sempre que o vínculo empregatício foi cessado antes
                do período de 12 meses.
              </p>
              <p>
                O cálculo é feito aplicando a fórmula: (Salário bruto / 12) x
                número de meses trabalhados.
              </p>
              <p>Exemplo: meses trabalhados = 5; salário = 3000</p>
              <p>13º Proporcional = (3000 / 12) x 5 = R$1.250,00</p>
              <p>
                No exemplo acima o colaborador deve receber o montante de
                R$1.250,00 referentes ao décimo terceiro proporcional
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="title">O que é o aviso prévio?</h3>
            <div className="flex flex-col gap-3">
              <p>
                O aviso prévio é uma comunicação formal de desligamento do
                contrato de trabalho que deve ocorrer com antecedência mínima de
                30 dias, para que empresa e empregado possam se organizar antes
                do fim do vínculo.
              </p>
              <p>O período de aviso prévio pode ser:</p>
              <ul>
                <li>
                  Aviso trabalhado: o empregado continua trabalhando no período.
                </li>
                <li>
                  Aviso indenizado: o contrato termina imediatamente e o
                  empregador paga o período.
                </li>
                <li>
                  Aviso dispensado: a fins de direito é identico ao trabalhado,
                  mas a empresa opta por deixar o trabalhador em casa.
                </li>
                <li>
                  Não cumprido: funcionário não comparece para cumprir os dias
                  de aviso.
                </li>
              </ul>
              <p>
                A duração do aviso prévio depende do tempo de serviço: começa em
                30 dias para até 1 ano de serviço, e adiciona 3 dias por ano
                completo de trabalho (até 90 dias).
              </p>
              <p>
                Para calcular aplicamos a fórmula: Aviso = Salario mensal / 30 x
                dias de aviso:
              </p>
              <p>
                Exemplo: salário R$ 2.100, 3 anos de empresa (aviso de 39 dias)
              </p>
              <p> aviso = (2.100 ÷ 30) × 39 = R$ 2.730,00.</p>
              <p>
                O empregador deve pagar o aviso prévio junto com as verbas
                rescisórias em até 10 dias após o término do contrato.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="title">Fórmulas</h2>
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
                title="Décimo terceiro proporcional"
                recipe="Décimo terceiro proporcional = (salario / 12) * meses trabalhados no ano"
                explain={[
                  "1 mes = 30 dias;",
                  "Exemplo: Tempo trabalhado no ano: 7 meses e 17 dias.",
                  "Meses trabalhados = 8 meses;",
                  "Se 'sobrar'; 15 dias ou mais trabalhados, é arrendondo para +1 mes, se não o mes não conta.  Exemplo: Tempo trabalhado no ano: 9 meses e 13 dias. Meses trabalhados = 9 meses",
                ]}
              />
            </li>
                        <li>
              <Recipe
                title="Aviso Prévio"
                recipe="Aviso = Salário mensal / 30 * dias aviso"
                explain={[
                  "Na calculadora existe: aviso indenizado, trabalhado, dispensado e não cumprido, cada qual com sua condição.", "Quando o empregado é demitido por justa causa o funcionário perde o direito de aviso prévio.","A cada ano trabalhado é acrescido +3 dias de aviso."
                ]}
              />
            </li>
          </ol>
        </div>
      </section>
    </section>
  );
}
