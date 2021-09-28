export * from './lib/vehicles.module';
export * from './lib/components/vehicles/vehicles.component';

import * as keys from './assets/i18n/en.json';
export type TranslationKeys = keyof typeof keys;
