export * from './lib/vehicles.module';
export * from './lib/components/vehicles/vehicles.component';
export * from './lib/featureFlag';

import * as keys from './assets/i18n.json';
export const i18nKeys = Object.keys(keys).filter((k) => k !== 'default');
