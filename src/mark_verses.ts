// Função para gerar uma chave única para o versículo
function generateVerseKey(book: string, chapter: number, verse: number): string {
    return `${book}-${chapter}-${verse}`;
}
  
// Função para marcar um versículo
export function markVerse(book: string, chapter: number, verse: number): void {
    const key = generateVerseKey(book, chapter, verse);
    
    // Obtém os versículos marcados do armazenamento local
    const markedVerses = JSON.parse(localStorage.getItem('markedVerses') || '{}');
  
    // Adiciona o versículo à lista de marcados
    markedVerses[key] = true;
  
    // Armazena a lista atualizada no armazenamento local
    localStorage.setItem('markedVerses', JSON.stringify(markedVerses));
}

// Função para desmarcar um versículo
export function unmarkVerse(book: string, chapter: number, verse: number): void {
    const key = generateVerseKey(book, chapter, verse);
    
    // Obtém os versículos marcados do armazenamento local
    const markedVerses = JSON.parse(localStorage.getItem('markedVerses') || '{}');
  
    // Verifica se o versículo está marcado
    if (markedVerses[key]) {
      // Remove o versículo da lista de marcados
      delete markedVerses[key];
  
      // Atualiza o armazenamento local
      localStorage.setItem('markedVerses', JSON.stringify(markedVerses));
    } else {
      console.error('Verse is not marked.');
    }
}
  
// Função para verificar se o versículo está marcado
export function isVerseMarked(book: string, chapter: number, verse: number): boolean {
    const key = generateVerseKey(book, chapter, verse);
  
    // Obtém os versículos marcados do armazenamento local
    const markedVerses = JSON.parse(localStorage.getItem('markedVerses') || '{}');
  
    // Verifica se o versículo está marcado
    return !!markedVerses[key];
}