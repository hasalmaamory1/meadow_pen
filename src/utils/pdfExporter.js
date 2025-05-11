import jsPDF from 'jspdf';

export function exportToPDF(content, title) {
  const doc = new jsPDF();
  const lines = doc.splitTextToSize(content, 180);

  let y = 20;
  lines.forEach((line) => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }
    doc.text(line, 15, y);
    y += 7;
  });

  doc.save(`${title || 'book'}.pdf`);
}