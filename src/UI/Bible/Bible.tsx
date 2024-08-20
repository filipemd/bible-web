import type { Component } from 'solid-js';
import { createEffect, createSignal, For, Show, batch } from 'solid-js';
import { useParams, useNavigate, A } from '@solidjs/router';

import type { BibleError, BibleBooksResponse } from "../../fetch_bible";
import { getBookSize, getAllBooks } from '../../fetch_bible';
import { saveLastChapterRead, getLastChapterRead } from '../../history';

import Verses from './Verses';

import logo from '../../assets/icons/logo.svg';

import styles from '../../styles/Bible.module.scss';

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

    const history = getLastChapterRead();

    // Sinais para version, book, chapter e verse
    const [version] = createSignal<string>(params.version || history.version || "en_kjv");
    const [book, setBook] = createSignal<string>(isNaN(Number(params.book)) ? params.book || history.book ||"gn" : '');
    const [chapter, setChapter] = createSignal<number>(Number(params.chapter) || history.chapter || 1);
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
            saveLastChapterRead(version(), book(), chapter());
        }
    }, [version, book, chapter, verse]);

    // Função para lidar com mudanças no livro e no capítulo
    function onchange(updatedBook?: string, updatedChapter?: number) {
        batch(() => {
            if (updatedChapter) {
                setChapter(updatedChapter);
            }
            if (updatedBook) {
                setBook(updatedBook);
                setChapter(1);
            }
        });
    }

    return (
        <Show when={book() !== ''} fallback={<em style={{ color: "gray" }}>Loading...</em>}>
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
                    fallback={<button onClick={() => setVerse(0)}>Full chapter.</button>}>
                    <button onClick={() => setChapter(chapter() + 1)}>Next chapter.</button>
                </Show>
            </div>
        </Show>
    );
};


export default Bible;
