export async function translateText(text, targetLang) {
  // In production, use Google Translate API or DeepL
  console.log(`Translating to ${targetLang}:`, text.slice(0, 50) + '...');
  return `[Translated in ${targetLang}] ${text}`;
}