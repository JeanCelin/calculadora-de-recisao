import { TiposAviso } from "@/app/types/tiposAviso";
import { TiposDemissao } from "@/app/types/tiposDemissao";

export function toStringValue(
  val: FormDataEntryValue | null,
  fieldName = "field"
): string {
  if (val === null) throw new Error(`${fieldName} ausente`);
  return String(val);
}

export function mapToTiposAviso(val: FormDataEntryValue | null): TiposAviso {
  const s = toStringValue(val, "aviso");
  switch (s) {
    case TiposAviso.trabalhado:
      return TiposAviso.trabalhado;
    case TiposAviso.indenizado:
      return TiposAviso.indenizado;
    case TiposAviso.dispensado:
      return TiposAviso.dispensado;
    case TiposAviso.naoCumprido:
      return TiposAviso.naoCumprido;
    default:
      throw new Error(`Tipo de aviso inválido: ${s}`);
  }
}

export function mapToTiposDemissao(
  val: FormDataEntryValue | null
): TiposDemissao {
  const s = toStringValue(val, "demissao");
  // ajuste os cases conforme seu enum TiposDemissao
  switch (s) {
    case TiposDemissao.pedido:
      return TiposDemissao.pedido; // exemplo — adapte ao seu enum
    case TiposDemissao.semJustaCausa:
      return TiposDemissao.semJustaCausa;
    case TiposDemissao.justaCausa:
      return TiposDemissao.justaCausa;
    default:
      throw new Error(`Tipo de rescisão inválido: ${s}`);
  }
}
