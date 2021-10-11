export * from './lib/inventory.module';
export * from './lib/components/inventory/inventory.component';
export * from './lib/featureFlag';
// export * from './lib/i18n-inventory-loader';

import * as keys from './i18n.json';
export const i18nKeys = Object.keys(keys).filter((k) => k !== 'default');
