import CalcIcon from "../svgs/CalcIcon";
import ClockIcon from "../svgs/ClockIcon";
import ShieldIcon from "../svgs/ShieldIcon";
import Card from "./Card";

export default function About() {
  return (
    <section className=" bg-blue-100 flex flex-col content-center items-center  text-center px-4 py-20   text  ">
      <header className="max-w-4xl flex flex-col gap-4 content-center items-center mb-11">
        <p className="title">
          Calcule o valor da sua recisão trabalhista em minutos
        </p>
        <p>
          Simples, rápido e gratuito. Descubra quanto você tem direito a receber
          ao encerrar seu contrato de trabalho.{" "}
        </p>
        <button className="btn btn-primary flex items-center ">
          <div className="w-4">
            <CalcIcon size={16} color="text-white" />
          </div>
          <p>Ir para a Calculadora</p>
        </button>
      </header>
      <div className="grid gap-6 pt-8 pb-8">
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
      </div>
    </section>
  );
}
