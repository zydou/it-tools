export const languages = {
  en: "English",
  fr: "Français",
} as const;

export type LocaleKey = keyof typeof languages;

export const locales = Object.keys(languages) as LocaleKey[];
export const defaultLocale: LocaleKey = "en";