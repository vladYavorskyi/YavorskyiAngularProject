export function formatDate(iso: string): string {
  const date = new Date(iso);

  const months = [
    'січня', 'лютого', 'березня', 'квітня',
    'травня', 'червня', 'липня', 'серпня',
    'вересня', 'жовтня', 'листопада', 'грудня'
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day} ${month} ${year} о ${hours}:${minutes}`;
}
