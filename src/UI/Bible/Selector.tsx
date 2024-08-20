import type { Component } from 'solid-js';
import { createEffect, createSignal, For, onMount, onCleanup } from 'solid-js';
import { A } from '@solidjs/router';

import type { BibleBooksResponse } from "../../fetch_bible";
import { getAllBooks } from '../../fetch_bible';

import logo from '../../assets/icons/logo.svg';
import styles from '../../styles/Bible.module.scss';

const Selector: Component<{ version: string; book: string; bookSize: number; chapter: number; verse: number; onchange: (book?: string, chapter?: number) => void; disabled?: boolean; }> = (props) => {
    const [books, setBooks] = createSignal<BibleBooksResponse[]>([]);
    const [bookIndex, setBookIndex] = createSignal<number>(0);

    createEffect(() => {
        const fetchBooks = async () => {
            const fetchedBooks = await getAllBooks(props.version);
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

    const [hidden, setHidden] = createSignal(false);
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setHidden(currentScrollY > lastScrollY && currentScrollY > 100);
        lastScrollY = currentScrollY;
    };

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
    });

    onCleanup(() => {
        window.removeEventListener("scroll", handleScroll);
    });

    return (
        <div id={styles.selector} class={hidden() ? styles.hidden : styles.shown}>
            <div id={styles.version}>
                <img src={logo} width="50px" alt="Bible Logo" /><br />
                <A href={`${import.meta.env.BASE_URL}${props.version}/${bookIndex()}/${props.chapter}/${props.verse || ''}select_version`}>
                    Change version.
                </A>
            </div>
            <div id={styles.center}>
                <select
                    name="book"
                    onChange={(e) => props.onchange(e.currentTarget.value)}
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

export default Selector;
