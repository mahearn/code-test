export function formatDate(date) {
  const fullDate = new Date(date);
  const dateFormatted = fullDate.toDateString();
  return dateFormatted;
}
