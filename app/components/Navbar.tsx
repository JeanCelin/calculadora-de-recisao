export default function Navbar() {
  return (
    <nav className="flex  w-full place-content-between  p-4 border-b border-black/10">
      <div className="flex  items-center  flex-row gap-2  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-scale w-8 h-8 text-blue-600"
          aria-hidden="true">
          <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
          <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path>
          <path d="M7 21h10"></path>
          <path d="M12 3v18"></path>
          <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path>
        </svg>

        <span>Calculadora de Recisão</span>
      </div>
      <div className="hidden">
        <span>Início</span>
        <span>Sobre</span>
        <span>FAQ</span>
        <span>Contato</span>
      </div>
      <div>
        <button className="btn btn-primary text-nowrap">Calcular Agora</button>
      </div>
    </nav>
  );
}
