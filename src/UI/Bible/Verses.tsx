import type { Component } from 'solid-js';
import { createEffect, createSignal, createMemo, For, Show } from 'solid-js';
import { Title } from '@solidjs/meta';
import { A } from '@solidjs/router';

import type { BibleVerseResponse } from "../../fetch_bible";
import { getBibleVerses } from '../../fetch_bible';

import Copy from '../Copy';

import styles from '../../styles/Bible.module.scss';

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
                    <Verse text={verses()!.verses[props.verse - 1] || "Verse not found."} number={props.verse} />
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

export default Verses;