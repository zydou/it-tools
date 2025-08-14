import type { LocaleKey } from "@/i18n/languages";

export type ToolDefinition = {
    id: string;
    entrypoint: () => Promise<{ default: any }>;
    icon: string;
    getLocalizedInfo: ({locale}: {locale: LocaleKey}) => {
        slug: string;
        title: string;
        description: string;
    }
}