export * from './lib/shared.module';
export * from './lib/vehicles.service';
export * from './lib/inventory.service';
export * from './lib/models';

import * as keys from 'apps/child-poc/src/assets/i18n/en.json';
export type TranslationKeys = keyof typeof keys;
