import type { LocaleKey } from "@/i18n/languages";
import type { ToolDefinition } from "../tools.types";
import { locales } from "./token-generator.locales";

export default {
    id: "token-generator",
    icon: "i-tabler-key",
    entrypoint: () => import("./token-generator.entry.astro"),
    getLocalizedInfo: ({locale}: {locale: LocaleKey}) => ({
        slug: locales[locale].slug,
        title: locales[locale].title,
        description: locales[locale].description,
    })
} satisfies ToolDefinition;