export function formattedBRL(value: number) {
  const BRL = value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

  return BRL;
}
