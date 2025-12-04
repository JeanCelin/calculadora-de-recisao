'use client'
import About from "./components/About";
import Form from "./components/Form";
import CalcRecisorio from "./utils/calcRecisorio";

export default function Home() {

  CalcRecisorio()

  return (
    <div>
      <main>
        <Form/>
        <About />
      </main>
    </div>
  );
}
