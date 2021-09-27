import { TranslationKeys, i18nKey } from './translation-models';

export class RequiredTranslationKeys implements TranslationKeys {
    public keys: i18nKey[] = [
        {
            key: 'DETAILS',
            children: [
                {
                    key: 'HOME',
                    language: 'en',
                    translation: 'Vehicle Details'
                }
            ]
        },
        {
            key: 'VEHICLES',
            children: [
                {
                    key: 'VEHICLE_ID',
                    language: 'en',
                    translation: 'Inventory number'
                },
                {
                    key: 'VEHICLE_MAKE',
                    language: 'en',
                    translation: 'Manufacturer'
                },
                {
                    key: 'VEHICLE_MODEL',
                    language: 'en',
                    translation: 'Model'
                },
                {
                    key: 'VEHICLE_YEAR',
                    language: 'en',
                    translation: 'Year'
                },
                {
                    key: 'VEHICLE_CONFIGURATION',
                    language: 'en',
                    translation: 'Trim'
                },
                {
                    key: 'VEHICLE_ENGINE_TYPE',
                    language: 'en',
                    translation: 'Transmission Type'
                },
                {
                    key: 'VEHICLE_WHEEL_SIZE',
                    language: 'en',
                    translation: 'Wheel Size'
                },
                {
                    key: 'VEHICLE_ALL_WHEEL_DRIVE',
                    language: 'en',
                    translation: 'All Wheel Drive'
                },
                {
                    key: 'VEHICLE_FUEL_TYPE',
                    language: 'en',
                    translation: 'Fuel Type'
                },
                {
                    key: 'VEHICLE_MILEAGE',
                    language: 'en',
                    translation: 'Mileage'
                },
                {
                    key: 'VEHICLE_ODOMETER',
                    language: 'en',
                    translation: 'Odometer'
                },
                {
                    key: 'TRANSMISSION_TYPE_AUTO',
                    language: 'en',
                    translation: 'Automatic'
                },
                {
                    key: 'TRANSMISSION_TYPE_MANU',
                    language: 'en',
                    translation: 'Manual'
                },
                {
                    key: 'AWD_TRUE',
                    language: 'en',
                    translation: 'True'
                },
                {
                    key: 'AWD_FALSE',
                    language: 'en',
                    translation: 'False'
                },
                {
                    key: 'FUEL_TYPE_GAS',
                    language: 'en',
                    translation: 'Gasoline'
                },
                {
                    key: 'FUEL_TYPE_NAT',
                    language: 'en',
                    translation: 'Natural Gas'
                },
                {
                    key: 'FUEL_TYPE_DIE',
                    language: 'en',
                    translation: 'Diesel'
                },
                {
                    key: 'MILEAGE_CITY',
                    language: 'en',
                    translation: 'City'
                },
                {
                    key: 'MILEAGE_HIGH',
                    language: 'en',
                    translation: 'Highway'
                },
                {
                    key: 'MILEAGE_COMB',
                    language: 'en',
                    translation: 'Combined'
                }
            ]
        }
    ];
}
