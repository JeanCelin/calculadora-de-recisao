"use client";
import About from "./components/About";
import Form from "./components/Form";
import Result from "./components/Result";

export default function Home() {
  return (
    <div className="pt-10">
      <main>
        <div className="px-2">
          <h1 className="title pb-4">Faça o cálculo da sua recisão trabalhista</h1>
          <p className="text text-center">
            Preencha os campos para fazer o cálculo da sua recisão trabalhista
            de forma grátis e automática
          </p>
        </div>

        <Form />

        <About />
      </main>
    </div>
  );
}
