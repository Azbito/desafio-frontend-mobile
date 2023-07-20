export function onlyNumbers(value: string) {
  const result = value.replace(/\D/g, '');
  return result;
}
