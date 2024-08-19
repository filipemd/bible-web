interface Version {
    name: string;
    abbreviation: string;
}

interface Language {
    language: string;
    versions: Version[];
}

let versions: Promise<Language[]>;
async function versions_index(): Promise<Language[]> {
    if (!versions) {
        const response = await fetch(`${import.meta.env.BASE_URL}static/bible/json/index.json`);
        versions = response.json();
    }
    return versions;
}

export default versions_index;