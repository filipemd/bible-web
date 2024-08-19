import type { Component, JSX } from 'solid-js';
import { createEffect, createSignal, createMemo, For, Show } from 'solid-js';
import { Title } from '@solidjs/meta';
import { A } from '@solidjs/router';

import type { BibleVerseResponse } from "../../fetch_bible";
import { getBibleVerses } from '../../fetch_bible';
import { isVerseMarked } from '../../mark_verses';

import Copy from '../Copy';
import Marker from '../Marker';

import styles from '../../styles/Verses.module.scss';

// Componente para exibir um verso específico
const Verse: Component<{ book: string; chapter: number; verse: number; text: string; url?: string; onClick?: (verse: number) => void;}> = (props) => {
    const href = createMemo(() => props.url ? `${props.url}${props.verse}` : `#${props.verse}`);

    const [marked, setMarked] = createSignal(isVerseMarked(props.book, props.chapter, props.verse));
    return (
        <p>
            <span class={marked() ? styles.marked : ''}>
            <A class={styles.verseNumber} href={href()} onClick={() => props.onClick?.(props.verse)}>
                {props.verse}
            </A>
            {"    " + props.text + "    "}
            </span>
            <Copy text={props.text}/>
            <Marker book={props.book} chapter={props.chapter} verse={props.verse} marked={marked()} onClick={() => setMarked(!marked())}/>
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
        <>
            <Show when={verses()}>
                <Title>{title()}</Title>
                <h1>{title()}</h1>
                <Show when={props.verse > 0}>
                    <Verse book={props.book} chapter={props.chapter} verse={props.verse} text={verses()!.verses[props.verse - 1] || "Verse not found."} url={`${import.meta.env.BASE_URL}${props.version}/${props.book}/${props.chapter}/`} onClick={props.onVerseClick}/>
                </Show>
                <Show when={props.verse === 0}>
                    <For each={verses()!.verses} fallback={<p>Nenhum verso encontrado.</p>}>
                        {(text: string, index: () => number) => (
                            <Verse book={props.book} chapter={props.chapter} verse={index() + 1} text={text} url={`${import.meta.env.BASE_URL}${props.version}/${props.book}/${props.chapter}/`} onClick={props.onVerseClick}/>
                        )}
                    </For>
                </Show>
            </Show>
        </>
    );
};

export default Verses;