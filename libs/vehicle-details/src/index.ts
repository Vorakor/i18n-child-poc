export * from './lib/vehicle-details.module';
export * from './lib/components/details/details.component';
// export * from './lib/translation-models';

import * as keys from './assets/i18n.json';
export type TranslationKeys = keyof typeof keys;
export const i18nKeys = Object.keys(keys).filter((k) => k !== 'default');
