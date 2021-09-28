export * from './lib/inventory.module';
export * from './lib/components/inventory/inventory.component';
// export * from './lib/i18n-inventory-loader';

import * as keys from './assets/i18n/en.json';
export type TranslationKeys = keyof typeof keys;
