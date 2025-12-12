import { formatKey } from "../utils/format-key";
import { verifyText } from "../utils/verifyText";


 type SectionData = Record<string, number | boolean | null>;
 
 interface SectionProps {
  title: string;
  data: SectionData;
}

export default function Section({ title, data }: SectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="title">{title}</h2>

      {Object.entries(data).map(([key, value]) => (
        <div className="container" key={key}>
          <span className="key text">{formatKey(key)}</span>
          <p className="value text2">{verifyText(value)}</p>
        </div>
      ))}
    </div>
  );
}