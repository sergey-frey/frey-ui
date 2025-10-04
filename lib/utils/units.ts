export const normalizeUnit = (unit: string | number) =>
  typeof unit === "string" ? unit : `${unit}px`;
