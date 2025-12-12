import { Resposta } from "../types/resposta";
import { verifyText } from "../utils/verifyText";
import { formatKey } from "../utils/format-key";
import Section from "./Section";
export default function Result({
  result,
}: {
  result: Resposta | false | undefined;
}) {
  console.log(result);
  if (!result) {
    return (
      <p className="text-slate-500">
        Preencha o formulário e clique em calcular.
      </p>
    );
  }
  const { deducao, fgts, totalLiquido, verbas } = result;

  return (
    <div
      className="pl-4 pr-4 pt-6 pb-6  border border-stone-50
     rounded-md bg-blue-50 shadow grid grid-cols-1 gap-6 ">
      <div className="">
        <div>
          <h2 className="title">Resultado do Calculo</h2>
          <p className="bg-white rounded-md p-4 text-center text-base font-bold ">{`R$ ${Number(
            totalLiquido
          ).toFixed(2)}`}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Section title="Verbas" data={verbas} />
      </div>
      <div className="flex flex-col gap-4">
        <Section title="FGTS" data={fgts} />
      </div>
      <div className="flex flex-col gap-4">
        <Section title="Deduções" data={deducao} />
      </div>
    </div>
  );
}
