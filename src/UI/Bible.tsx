import type { Component } from 'solid-js';
import { createEffect, createSignal, createMemo, For, Show } from 'solid-js';
import { Title } from '@solidjs/meta';
import { useParams, useNavigate, A } from '@solidjs/router';

import type { BibleVerseResponse, BibleError, BibleBooksResponse } from "../fetch_bible";
import { getBibleVerses, getBookSize, getAllBooks } from '../fetch_bible';

import Copy from './Copy';

import styles from '../styles/Bible.module.scss';

import logo from '../assets/icons/logo.svg';

// Componente para exibir um verso específico
const Verse: Component<{ number: number; text: string; url?: string; onClick?: (verse: number) => void;}> = (props) => {
    const href = props.url ? `${props.url}${props.number}` : `#${props.number}`;
    return (
        <p>
            <A class={styles.verseNumber} href={href} onClick={() => props.onClick?.(props.number)}>
                {props.number}
            </A>
            {"    " + props.text + "    "}
            <Copy text={props.text}/>
        </p>
    );
};

// Componente para exibir os versos de um capítulo específico
const Verses: Component<{ version: string; book: string; chapter: number; verse: number; onVerseClick: (verse: number) => void; }> = (props) => {
    const [verses, setVerses] = createSignal<BibleVerseResponse>();

    // Carrega os versos quando as dependências mudam (versão, livro, capítulo)
    createEffect(() => {
        (async () => {
            const fetchedVerses = await getBibleVerses(props.version, props.book, props.chapter);
            if (!("error" in fetchedVerses)) {
                setVerses(fetchedVerses);
            } else {
                console.error(`Erro em getBibleVerses(${props.version}, ${props.book}, ${props.chapter}):`, fetchedVerses.error);
                console.log(fetchedVerses);
            }
        })();
    }, [props.version, props.book, props.chapter]);

    // Memoização do título para evitar recomputações desnecessárias
    const title = createMemo(() => `${verses()?.book} ${props.chapter}${props.verse ? `:${props.verse}` : ''} ${props.version.toUpperCase()}`);

    return (
        <div id={styles.chapter}>
            <Show when={verses()}>
                <Title>{title()}</Title>
                <h1>{title()}</h1>
                <Show when={props.verse > 0}>
                    <Verse text={verses()!.verses[props.verse - 1] || "Verso não encontrado."} number={props.verse} />
                </Show>
                <Show when={props.verse === 0}>
                    <For each={verses()!.verses} fallback={<p>Nenhum verso encontrado.</p>}>
                        {(text: string, index: () => number) => (
                            <Verse number={index() + 1} text={text} url={`${import.meta.env.BASE_URL}${props.version}/${props.book}/${props.chapter}/`} onClick={props.onVerseClick} />
                        )}
                    </For>
                </Show>
            </Show>
        </div>
    );
};

// Componente para selecionar o livro e capítulo
const Selector: Component<{ version: string; book: string; bookSize: number; chapter: number; verse: number; onchange: (book?: string, chapter?: number) => void; disabled?: boolean; }> = (props) => {
    const [books, setBooks] = createSignal<BibleBooksResponse[]>([]);
    const [bookIndex, setBookIndex] = createSignal<number>(0);

    createEffect(() => {
        const fetchBooks = async () => {
            const fetchedBooks: BibleBooksResponse[] | BibleError = await getAllBooks(props.version);
            if (!("error" in fetchedBooks)) {
                setBooks(fetchedBooks);
            } else {
                console.error("Error in getAllBooks():", fetchedBooks.error);
            }
        };
        fetchBooks();
    }, [props.version]);

    createEffect(() => {
        const index = books().findIndex(book => book.abbrev === props.book);
        setBookIndex(index >= 0 ? index : 0);
    }, [props.book, books]);

    return (
        <div id={styles.selector}>
            <div id={styles.version}>
                <img src={logo} width="50px" alt="Bible Logo"/><br/>
                <A href={`${import.meta.env.BASE_URL}${props.version}/${bookIndex()}/${props.chapter}/${props.verse+'/' || ''}select_version`}>Change version.</A>
            </div>
            <div id={styles.center}>
                <select
                    name="book"
                    onChange={(e) => {
                        const selectedBook = e.currentTarget.value;
                        props.onchange(selectedBook);
                    }}
                    disabled={props.disabled}>
                    <For each={books()}>
                        {(book) => (
                            <option value={book.abbrev} selected={book.abbrev === props.book}>
                                {book.name}
                            </option>
                        )}
                    </For>
                </select>
                <input
                    type="number"
                    name="chapter"
                    min="1"
                    max={props.bookSize}
                    value={props.chapter}
                    onChange={(e) => {
                        const chapter = Number(e.currentTarget.value);
                        if (!isNaN(chapter) && chapter >= 1 && chapter <= props.bookSize) {
                            props.onchange(undefined, chapter);
                        } else {
                            e.currentTarget.value = props.chapter.toString();
                        }
                    }}
                    disabled={props.disabled}
                />
            </div>
        </div>
    );
};

// Componente principal da Bíblia
const Bible: Component = () => {
    const params = useParams(); // Obtém parâmetros da URL
    const navigate = useNavigate(); // Função para navegação

    // Sinais para version, book, chapter e verse
    const [version] = createSignal<string>(params.version || "en_kjv");
    const [book, setBook] = createSignal<string>(isNaN(Number(params.book)) ? params.book || "gn" : '');
    const [chapter, setChapter] = createSignal<number>(Number(params.chapter) || 1);
    const [verse, setVerse] = createSignal<number>(Number(params.verse) || 0);

    const [bookSize, setBookSize] = createSignal<number>(0);

    // Obtém detalhes do livro e seu tamanho
    createEffect(async () => {
        try {
            if (book() === '') {
                // Se o livro estiver vazio, busca todos os livros e define o livro atual
                const books = await getAllBooks(version());
                if (!("error" in books)) {
                    setBook(books[Number(params.book)]?.abbrev);
                }
            } else {
                // Obtém o tamanho do livro atual
                const size = await getBookSize(version(), book());
                setBookSize(size);
                if (!size) console.error("Falha ao buscar o tamanho do livro.");
            }
        } catch (error) {
            console.error("Erro:", error);
        }
    }, [version, book]);

    // Atualiza a URL sempre que a versão, o livro, o capítulo ou o verso mudam
    createEffect(() => {
        if (book() !== '') {
            navigate(`${import.meta.env.BASE_URL}${version()}/${book()}/${chapter()}/${verse() || ''}`);
        }
    }, [version, book, chapter, verse]);

    // Manipula mudanças no livro e no capítulo
    createEffect(() => {
        if (book() !== '') {
            setChapter(1); // Reseta o capítulo para 1 quando o livro muda
        }
    }, [book]);

    // Função para lidar com mudanças no livro e no capítulo
    function onchange(updatedBook?: string, updatedChapter?: number) {
        if (updatedBook && updatedBook !== book()) {
            setBook(updatedBook);
        }
        if (updatedChapter) {
            setChapter(updatedChapter);
        }
    }

    return (
        <Show when={book() !== ''} fallback={<em style={{ color: "gray" }}>Carregando...</em>}>
            <Selector
                version={version()}
                book={book()}
                bookSize={bookSize()}
                chapter={chapter()}
                verse={verse()}
                onchange={onchange}
                disabled={verse() !== 0} />
            <div id={styles.content}>
                <main>
                    <article>
                        <Verses
                            version={version()}
                            book={book()}
                            chapter={chapter()}
                            verse={verse()}
                            onVerseClick={setVerse} />
                    </article>
                </main>
                <Show
                    when={typeof bookSize() === 'number' && chapter() < bookSize() && verse() === 0}
                    fallback={<button onClick={() => setVerse(0)}>Ler capítulo completo.</button>}
                >
                    <button onClick={() => setChapter(chapter() + 1)}>Próximo Capítulo.</button>
                </Show>
            </div>
        </Show>
    );
};


export default Bible;
