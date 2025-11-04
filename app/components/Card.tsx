import { ReactNode } from "react";

type CardProps = {
  svg: ReactNode;
  title: string;
  text: string;
};

export default function Card({ svg, title, text }: CardProps) {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col items-center gap-2">
      <div className="w-8 h-8">{svg}</div>
      <span>{title}</span>
      <p>{text}</p>
    </div>
  );
}
