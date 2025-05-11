import { saveAs } from 'file-saver';

export function exportToDOCX(content, title = 'Book') {
  const docTemplate = `
    <html xmlns:o='urn:schemas-microsoft-com:office:office'
          xmlns:w='urn:schemas-microsoft-com:office:word'>
      <head><title>${title}</title></head>
      <body><h1>${title}</h1><p>${content.replace(/\n/g, '<br>')}</p></body>
    </html>`;
  const blob = new Blob([docTemplate], { type: 'application/msword' });
  saveAs(blob, `${title}.docx`);
}

export function exportToRTF(content, title = 'Book') {
  const rtf = `{\\rtf1\\ansi\\deff0{\\fonttbl{\\f0 Times New Roman;}}\\fs28 \\b ${title}\\b0 \\line \\line ${content.replace(
    /\n/g,
    '\\line '
  )}}`;
  const blob = new Blob([rtf], { type: 'application/rtf' });
  saveAs(blob, `${title}.rtf`);
}