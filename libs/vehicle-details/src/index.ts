export * from './lib/vehicle-details.module';
export * from './lib/components/details/details.component';
// export * from './lib/details.service';
// export * from './lib/i18n-vehicle-details-loader';
// export * from './lib/translation-models';

import * as keys from 'apps/child-poc/src/assets/i18n/en.json';
export type TranslationKeys = keyof typeof keys;
