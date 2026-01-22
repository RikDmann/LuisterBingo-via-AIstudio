
// @ts-ignore
const { jsPDF } = window.jspdf;

export const generateBingoPDF = (themeTitle: string, words: string[], gridSize: number = 4) => {
  const doc = new jsPDF();
  const numCards = 30;
  const cellsPerPage = gridSize * gridSize;

  for (let cardIdx = 0; cardIdx < numCards; cardIdx++) {
    if (cardIdx > 0) doc.addPage();

    // Shuffle words and pick necessary amount
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    const cardWords = shuffled.slice(0, cellsPerPage);

    // Title
    doc.setFontSize(22);
    doc.setTextColor(255, 102, 0); // Orange
    doc.text(`LuisterBingo: ${themeTitle}`, 105, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.setTextColor(100);
    doc.text(`Kaart #${cardIdx + 1} (${gridSize}x${gridSize})`, 105, 28, { align: 'center' });

    // Grid Settings
    const margin = 20;
    const pageWidth = doc.internal.pageSize.getWidth();
    const cellWidth = (pageWidth - (margin * 2)) / gridSize;
    const cellHeight = cellWidth; // Square cells
    const startY = 40;

    doc.setDrawColor(0, 51, 153); // Blue border
    doc.setLineWidth(0.5);

    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = margin + (j * cellWidth);
        const y = startY + (i * cellHeight);
        const wordIdx = i * gridSize + j;
        
        if (wordIdx >= cardWords.length) continue;
        
        const rawWord = cardWords[wordIdx];
        // Pak alleen het hoofdwoord voor de PDF
        const word = rawWord.split('|')[0];

        // Draw Cell
        doc.rect(x, y, cellWidth, cellHeight);

        // Add text (word)
        // Adjust font size based on grid size
        const fontSize = gridSize === 5 ? 8 : (gridSize === 3 ? 12 : 10);
        doc.setFontSize(fontSize);
        doc.setTextColor(0, 0, 0);
        
        // Split text to fit in cell
        const splitText = doc.splitTextToSize(word, cellWidth - 4);
        const textHeight = splitText.length * (fontSize / 2);
        const textY = y + (cellHeight / 2) - (textHeight / 2) + (fontSize / 3);
        
        doc.text(splitText, x + (cellWidth / 2), textY, { align: 'center' });
      }
    }

    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text('Gegenereerd via LuisterBingo.nl', 105, 285, { align: 'center' });
  }

  doc.save(`LuisterBingo_${themeTitle.replace(/\s+/g, '_')}_${gridSize}x${gridSize}.pdf`);
};
