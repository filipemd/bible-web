interface Chapter { 
    version: string, 
    book: string, 
    chapter: number 
}

let lastChapter: Chapter;

// Função para salvar o último capítulo lido com a versão
export function saveLastChapterRead(version: string, book: string, chapter: number): void {
    lastChapter = { version, book, chapter };
}
  
// Função para recuperar o último capítulo lido com a versão
export function getLastChapterRead(): { version: string, book: string, chapter: number } {
    const chapter = localStorage.getItem('lastChapterRead');
  
    // Retorna o último capítulo lido ou null se não houver histórico
    return chapter ? JSON.parse(chapter) : {version: null, book: null, chapter: null};
}

// Salva o último capítulo lido no armazenamento local
window.addEventListener('beforeunload', () => localStorage.setItem('lastChapterRead', JSON.stringify(lastChapter)));