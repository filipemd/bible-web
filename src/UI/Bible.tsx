import type { Component } from 'solid-js';
import { createEffect, createSignal, createMemo, For, Show } from 'solid-js';
import { Title } from '@solidjs/meta';
import { useParams, useNavigate, A } from '@solidjs/router';

import { getBibleVerses, getBookSize, getAllBooks } from '../fetch_bible';
import type { BibleVerseResponse, BibleError, BibleBooksResponse } from "../fetch_bible";

import Copy from './Copy';

import styles from '../styles/Bible.module.scss';

import logo from '../assets/icons/logo.svg';

// Componente para exibir um verso específico
const Verse: Component<{ number: number; text: string; url?: string; onClick?: (verse: number) => void; }> = (props) => {
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
                console.error("Erro em getBibleVerses():", fetchedVerses.error);
            }
        })();
    });

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
                            <Verse number={index() + 1} text={text} url={`${import.meta.env.BASE_URL}${props.version}/${props.book}/${props.chapter}/`} onClick={props.onVerseClick}/>
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
                    disabled={props.disabled}
                >
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
    const params = useParams();
    const navigate = useNavigate();

    const [version] = createSignal<string>(params.version || "en_kjv");

    const [book, setBook] = createSignal<string>('');
    const [chapter, setChapter] = createSignal<number>(Number(params.chapter) || 1);
    const [verse, setVerse] = createSignal<number>(Number(params.verse) || 0);

    const [bookSize, setBookSize] = createSignal<number>(0);

    if (isNaN(Number(params.book))) {
        setBook(params.book || "gn");
    }

    // Transformação do número para abreviação e verificação inicial
    createEffect(async () => {
        try {
            if (book() === '') {
                const books = await getAllBooks(version());
                if (!("error" in books)) {
                    setBook(books[Number(params.book)]?.abbrev);
                }
            } else {
                const size = await getBookSize(version(), book());
                setBookSize(size);
                if (!size) console.error("Failed to fetch book size.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    });

    // Atualiza a URL sempre que as dependências mudam
    createEffect(() => {
        if (book() !== '')
            navigate(`${import.meta.env.BASE_URL}${version()}/${book()}/${chapter()}/${verse() || ''}`);
    }, [book, chapter, verse]);

    function onchange(updatedBook?: string, updatedChapter?: number) {
        if (updatedBook && updatedBook !== book()) {
            setBook(updatedBook); 
            setChapter(1); // Reset chapter to 1 if a new book is selected
        } else if (updatedChapter) {
            setChapter(updatedChapter);
        }
    }

    return (
        <Show when={book() !== ''} fallback={<em style={{"color" : "gray"}}>Loading...</em>}>
            <Selector
                version={version()}
                book={book()}
                bookSize={bookSize()}
                chapter={chapter()}
                verse={verse()}
                onchange={onchange}
                disabled={verse() !== 0}
            />
            <div id={styles.content}>
                <main>
                    <article>
                        <Verses
                            version={version()}
                            book={book()}
                            chapter={chapter()}
                            verse={verse()}
                            onVerseClick={setVerse}
                        />
                    </article>
                </main>
                <Show
                    when={typeof bookSize() === 'number' && chapter() < bookSize() && verse() === 0}
                    fallback={<button onClick={() => setVerse(0)}>Read full chapter.</button>}
                >
                    <button onClick={() => setChapter(chapter() + 1)}>Next Chapter.</button>
                </Show>
            </div>
        </Show>
    );
};

export default Bible;
