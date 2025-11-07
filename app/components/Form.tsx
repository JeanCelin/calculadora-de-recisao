export default function Form() {
  return (
    <form>
      <label htmlFor="salAtual">salário Atual (R$)</label>
      <input type="number" id="salAtual"></input>
      <label htmlFor="depoisFerias">salário Atual (R$)</label>
      <input type="number" id="depoisFerias">
        Meses trabalhados depois da última ferias
      </input>
    </form>
  );
}
