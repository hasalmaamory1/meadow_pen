export async function generateBook(title, genre) {
  // Simulate AI-generated novel
  let content = '';
  for (let i = 1; i <= 25; i++) {
    content += `# Chapter ${i}\n\nOnce upon a time in the land of ${title || 'Imagination'}, there was a brave hero named Arin...\n\n`;
  }
  return content.repeat(20); // Long-form book
}

export function downloadPDF(text, title) {
  const blob = new Blob([text], { type: 'text/plain' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${title}.txt`;
  link.click();
}