export default function Form() {
  return (
    <form className="grid text gap-4 p-4">
      <div className="flex gap-1 flex-col">
        <label htmlFor="dataAdmissao">Data de Admissão </label>
        <input className="input" type="date" id="dataAdmissao" required></input>
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="dataDemissao">Data da Rescisão </label>
        <input className="input" type="date" id="dataDemissao" required></input>
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="salAtual">Salário Atual (R$) </label>
        <input
          className="input"
          type="number"
          id="salAtual"
          placeholder="3.000,00"
          required
        />
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="tipoRecisao">Tipo de Rescisão </label>
        <select
          id="tipoRecisao"
          className="h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-slate-300 focus:ring-1 focus:ring-blue-200">
          <option defaultValue="Pedido de Demissão">Pedido de Demissão</option>
          <option>Dispensa sem justa causa</option>
          <option>Dispensa por justa causa</option>
        </select>
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="tipoAviso">Aviso Prévio</label>
        <select
          id="tipoAviso"
          className="h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-slate-300 focus:ring-1 focus:ring-blue-200">
          <option defaultValue="Trabalhado">Trabalhado</option>
          <option defaultValue="Trabalhado">Indenizado</option>
          <option defaultValue="Trabalhado">Dispensado</option>
          <option defaultValue="Trabalhado">Não Cumprido</option>
        </select>
      </div>
      <div className="flex gap-1 flex-col">
        <label htmlFor="feriasVencidas">Férias vencidas a pagar?</label>
        <select
          id="feriasVencidas"
          className="h-10 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm outline-none focus:border-slate-300 focus:ring-1 focus:ring-blue-200">
          <option defaultValue="Não">Não</option>
          <option>Sim</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary text-nowrap m-auto">
        Calcular
      </button>
    </form>
  );
}
