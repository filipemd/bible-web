import { Component, createResource } from 'solid-js';
import { For } from 'solid-js';

import { useParams, A } from '@solidjs/router';
import { Title } from '@solidjs/meta';

import logo from '../assets/icons/logo.svg';

interface Version {
    name: string;
    abbreviation: string;
}

interface Language {
    language: string;
    versions: Version[];
}

async function versions_index(): Promise<Language[]> {
    const response = await fetch(`${import.meta.env.BASE_URL}static/bible/json/index.json`);
    return response.json();
}

const VersionSelector: Component = () => {
    const params = useParams();

    // Pega todas as versões
    const [languages] = createResource(versions_index);

    return (
        <>
            <img src={logo} width="100px" alt="Bible Logo" /><br />
            <h1>Select version:</h1>
            <Title>Select version:</Title>
            <div id="versions">
                <For each={languages()}>
                    {(language) => (
                        <details>
                        <summary><h2>{language.language}</h2></summary>
                        <ul>
                            <For each={language.versions}>
                                {(version) => (
                                    <li>
                                        <A href={`${import.meta.env.BASE_URL}${version.abbreviation}/${params.book}/${params.chapter}/${params.verse || ''}`} style={version.abbreviation === params.version ? {"background-color" : "limegreen"} : {}}>
                                            {version.name}
                                        </A>
                                    </li>
                                )}
                            </For>
                        </ul>
                        </details>
                    )}
                </For>
            </div>
        </>
    );
};

export default VersionSelector;
