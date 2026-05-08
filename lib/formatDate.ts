export function formatDate(date: string) {
  const pubDate = new Date(date);

  return pubDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
