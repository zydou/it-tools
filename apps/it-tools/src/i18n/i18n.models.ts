export function buildLocalizedUrl({lang, path}: {lang?: string, path: string}) {
   const slashlessPath = path.replace(/^\//, "");

    if (lang) {
        return `/${lang}/${slashlessPath}`;
    }

    return `/${slashlessPath}`;
}