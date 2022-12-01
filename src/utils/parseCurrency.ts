export default function parseCurrency(entry?: string | number): string {
  if (!entry) return '';
  const intl = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return intl.format(Number(entry));
}
