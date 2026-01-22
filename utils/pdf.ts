// @ts-ignore
const { jsPDF } = window.jspdf;

export const generateBingoPDF = (themeTitle: string, words: string[], gridSize: number = 4) => {
  const doc = new jsPDF();
  const numCards = 30;
  const cellsPerPage = gridSize * gridSize;

  for (let cardIdx = 0; cardIdx < numCards; cardIdx++) {
    if (cardIdx > 0) doc.addPage();

    const shuffled = [...words].sort(() => 0.5 - Math.random());
    const cardWords = shuffled.slice(0