interface RawString {
  raw: TemplateStringsArray;
}

export const tw = (
  strings: TemplateStringsArray,
  ...values: Array<any>
): string => String.raw({ raw: strings } as RawString, ...values);
