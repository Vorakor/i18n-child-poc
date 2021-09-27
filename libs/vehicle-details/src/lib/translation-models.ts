export interface TranslationKeys {
    keys: i18nKey[];
}

export interface i18nKey {
    key: string;
    children?: i18nKey[];
    translation?: string;
    language?: string;
}
