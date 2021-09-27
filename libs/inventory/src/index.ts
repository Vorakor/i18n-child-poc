export * from './lib/inventory.module';
export * from './lib/components/inventory/inventory.component';
// export * from './lib/i18n-inventory-loader';

import * as keys from 'apps/child-poc/src/assets/i18n/en.json';
export type TranslationKeys = keyof typeof keys;
