export * from './lib/vehicles.module';
export * from './lib/components/vehicles/vehicles.component';

import * as keys from './assets/i18n/en.json';
export const TranslationKeys = Object.keys(keys).filter((key) => key !== 'default');
