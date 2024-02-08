export type CreatehandleChangeArgsWithDescriptions<T> =
  | [field: Exclude<keyof T, "descriptions">, value: string]
  | [field: "descriptions", value: string[]];
