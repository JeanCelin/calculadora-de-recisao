interface Recipe {
  title: string;
  recipe: string;
  explain?: string[];
}

export default function Recipe({ title, recipe, explain }: Recipe) {
  return (
    <div className="flex flex-col gap-2">
      <span className="title">{title}</span>
      <span>{recipe}</span>
      {/* Condiciona a renderização do fundo amarelo apenas se o explain tiver elementos */}
      {explain && explain.length > 0 && (
        <div className="bg-amber-100 border-2 border-[#F0A811] p-2 rounded-lg">
          <span className=" text-start w-full text-[#F57914]">Atenção</span>
          {explain.map((element, index) => (
            <p className="text-start" key={index}>
              {element}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
