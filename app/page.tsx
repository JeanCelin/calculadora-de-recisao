"use client";
import About from "./components/About";
import Form from "./components/Form";
import Result from "./components/Result";

export default function Home() {
  return (
    <div>
      <main>
        <h1 className="title">Faça o cálculo da sua recisão trabalhista</h1>
        <p className="text text-center">
          Preencha os campos para fazer o cálculo da sua recisão trabalhista de
          forma grátis e automática
        </p>
        <Form />

        <About />
      </main>
    </div>
  );
}
