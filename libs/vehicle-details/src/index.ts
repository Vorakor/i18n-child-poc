export * from './lib/vehicle-details.module';
export * from './lib/components/details/details.component';
// export * from './lib/details.service';
// export * from './lib/i18n-vehicle-details-loader';
// export * from './lib/translation-models';

import * as keys from './assets/i18n/en.json';
export const TranslationKeys = Object.keys(keys).filter((key) => key !== 'default');
