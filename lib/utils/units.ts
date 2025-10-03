export const normalizeUnit = (unit: string | number) => {
  return typeof unit === "string" ? unit : `${unit}px`;
};
