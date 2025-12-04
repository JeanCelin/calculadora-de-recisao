"use client";
import About from "./components/About";
import Form from "./components/Form";
import Result from "./components/Result";

export default function Home() {
  return (
    <div>
      <main>
        <Form />
        <About />
      </main>
    </div>
  );
}
