export function humanizeText(text) {
  return text
    .replace(/hero/gi, 'protagonist')
    .replace(/brave/gi, 'resilient')
    .replace(/villain/gi, 'antagonist')
    .replace(/adventure/gi, 'journey');
}