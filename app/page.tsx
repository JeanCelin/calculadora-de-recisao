'use client'
import About from "./components/About";
import CalcRecisorio from "./utils/calcRecisorio";

export default function Home() {

  CalcRecisorio()

  return (
    <div>
      <main>
        <About />
      </main>
    </div>
  );
}
