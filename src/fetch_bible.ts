// Interfaces para a resposta da API
export interface BibleVerseResponse {
    book: string;
    verses: string[];
}

export interface BibleError {
    error: string;
}

export interface BibleBooksResponse {
    abbrev: string; 
    name: string;
}

interface BibleData {
    abbrev: string;
    name: string;
    chapters: string[][];
}

// Cache para armazenar os dados da Bíblia e evitar múltiplas requisições
const bibleCache: { [key: string]: BibleData[] } = {};

// Função para buscar os dados da Bíblia com cache
async function fetchBibleData(version: string, bibleUrl: string): Promise<BibleData[] | BibleError> {
    if (!bibleCache[version]) {
        const url = `${import.meta.env.BASE_URL}${bibleUrl}/${version}.json`;

        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error(`Erro: ${response.status} ${response.statusText}`);
            }

            const data: BibleData[] = await response.json();
            bibleCache[version] = data; // Armazena os dados no cache
        } catch (error) {
            console.error('Erro ao buscar dados da Bíblia:', error);
            console.log(url);
            return {
                error: error instanceof Error ? error.message : "Erro desconhecido ao buscar dados da Bíblia.",
            };
        }
    }

    return bibleCache[version];
}

// Pega os versículos da Bíblia
export async function getBibleVerses(version: string, book: string, chapter: number, bibleUrl: string = "static/bible/json"): Promise<BibleVerseResponse | BibleError> {
    if (!version || !book || chapter <= 0 || !Number.isInteger(chapter)) {
        return { error: "Parâmetros inválidos. Verifique a versão, livro e capítulo." };
    }

    const data = await fetchBibleData(version, bibleUrl);

    if ('error' in data) {
        return data;
    }

    const bookData = data.find((b) => b.abbrev === book);

    if (!bookData) {
        return { error: "Livro não encontrado." };
    }

    if (chapter > bookData.chapters.length) {
        return { error: "Capítulo não encontrado." };
    }

    const verses = bookData.chapters[chapter - 1] || [];

    return {
        book: bookData.name,
        verses: verses,
    };
}

// Função para pegar o tamanho (número de capítulos) de um livro
export async function getBookSize(version: string, book: string, bibleUrl: string = "static/bible/json"): Promise<number> {
    const data = await fetchBibleData(version, bibleUrl);

    if ('error' in data) {
        return 0;
    }

    const bookData = data.find((b) =>
        b.abbrev.toLowerCase() === book.toLowerCase() || b.name.toLowerCase() === book.toLowerCase()
    );

    if (!bookData) {
        return 0;
    }

    return bookData.chapters.length;
}

// Função para pegar todos os livros de uma versão
export async function getAllBooks(version: string, bibleUrl: string = "static/bible/json"): Promise<BibleBooksResponse[] | BibleError> {
    const data = await fetchBibleData(version, bibleUrl);

    if ('error' in data) {
        return data;
    }

    const books = data.map((book) => ({
        abbrev: book.abbrev,
        name: book.name,
    }));

    return books;
}
