import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DetailsService implements OnDestroy {
    private subs: Subscription[] = [];
    // public translations$: Observable<any> = this.translation.getTranslation(
    //     this.translation.currentLang ? this.translation.currentLang : this.translation.defaultLang
    // );
    constructor(private http: HttpClient, private translation: TranslateService) {}

    lazyLoadTranslations() {
        const currentLanguage = this.translation.currentLang ? this.translation.currentLang : this.translation.defaultLang;
        this.translation.setTranslation(currentLanguage, this._getTranslationsFromFile(currentLanguage));
    }

    _getTranslationsFromFile(lang: string): Observable<any> {
        const translationPath = './assets/vehicle-details/i18n/';
        return this.http.get(`${translationPath}${lang}.json`);
    }

    setTest1(): void {
        const langChange = this.translation.onLangChange.subscribe((event: LangChangeEvent) => {
            this._runSwitch(event.lang);
        });
        this._runSwitch(this.translation.getDefaultLang());
        this.subs.push(langChange);
    }

    _runSwitch(language: string): void {
        switch (language) {
            case 'de':
                this.setGerman();
                break;
            case 'en':
                this.setEnglish();
                break;
            case 'es':
                this.setSpanish();
                break;
            case 'fr':
                this.setFrench();
                break;
            case 'it':
                this.setItalian();
                break;
            case 'nl':
                this.setDutch();
                break;
            case 'pt':
                this.setPortuguese();
                break;
        }
    }

    setGerman(): void {
        this.translation.setTranslation('de', {
            DETAILS: { HOME: 'Fahrzeugangaben' },
            VEHICLES: {
                VEHICLE_ID: 'Inventar nummer',
                VEHICLE_MAKE: 'Hersteller',
                VEHICLE_MODEL: 'Modell',
                VEHICLE_YEAR: 'Jahr',
                VEHICLE_CONFIGURATION: 'Trimmen',
                VEHICLE_ENGINE_TYPE: 'Übertragungsart',
                VEHICLE_WHEEL_SIZE: 'Radgröße',
                VEHICLE_ALL_WHEEL_DRIVE: 'Allradantrieb',
                VEHICLE_FUEL_TYPE: 'Treibstoffart',
                VEHICLE_MILEAGE: 'Kilometerstand',
                VEHICLE_ODOMETER: 'Kilometerzähler',
                TRANSMISSION_TYPE_AUTO: 'Automatisch',
                TRANSMISSION_TYPE_MANU: 'Handbuch',
                AWD_TRUE: 'Wahr',
                AWD_FALSE: 'Falsch',
                FUEL_TYPE_GAS: 'Benzin',
                FUEL_TYPE_NAT: 'Erdgas',
                FUEL_TYPE_DIE: 'Diesel',
                MILEAGE_CITY: 'Stadt',
                MILEAGE_HIGH: 'Autobahn',
                MILEAGE_COMB: 'Kombiniert'
            }
        });
    }

    setEnglish(): void {
        this.translation.setTranslation('en', {
            DETAILS: { HOME: 'Vehicle Details' },
            VEHICLES: {
                VEHICLE_ID: 'Inventory number',
                VEHICLE_MAKE: 'Manufacturer',
                VEHICLE_MODEL: 'Model',
                VEHICLE_YEAR: 'Year',
                VEHICLE_CONFIGURATION: 'Trim',
                VEHICLE_ENGINE_TYPE: 'Transmission Type',
                VEHICLE_WHEEL_SIZE: 'Wheel Size',
                VEHICLE_ALL_WHEEL_DRIVE: 'All Wheel Drive',
                VEHICLE_FUEL_TYPE: 'Fuel Type',
                VEHICLE_MILEAGE: 'Mileage',
                VEHICLE_ODOMETER: 'Odometer',
                TRANSMISSION_TYPE_AUTO: 'Automatic',
                TRANSMISSION_TYPE_MANU: 'Manual',
                AWD_TRUE: 'True',
                AWD_FALSE: 'False',
                FUEL_TYPE_GAS: 'Gasoline',
                FUEL_TYPE_NAT: 'Natural Gas',
                FUEL_TYPE_DIE: 'Diesel',
                MILEAGE_CITY: 'City',
                MILEAGE_HIGH: 'Highway',
                MILEAGE_COMB: 'Combined'
            }
        });
    }

    setSpanish(): void {
        this.translation.setTranslation('es', {
            DETAILS: { HOME: 'Detalles del vehículo' },
            VEHICLES: {
                VEHICLE_ID: 'Numero de inventario',
                VEHICLE_MAKE: 'Fabricante',
                VEHICLE_MODEL: 'Modelo',
                VEHICLE_YEAR: 'Año',
                VEHICLE_CONFIGURATION: 'Podar',
                VEHICLE_ENGINE_TYPE: 'Tipo de transmisión',
                VEHICLE_WHEEL_SIZE: 'Tamaño de la rueda',
                VEHICLE_ALL_WHEEL_DRIVE: 'Todas las ruedas motrices',
                VEHICLE_FUEL_TYPE: 'Tipo de combustible',
                VEHICLE_MILEAGE: 'Kilometraje',
                VEHICLE_ODOMETER: 'Cuentakilómetros',
                TRANSMISSION_TYPE_AUTO: 'Automático',
                TRANSMISSION_TYPE_MANU: 'Manual',
                AWD_TRUE: 'Cierto',
                AWD_FALSE: 'Falso',
                FUEL_TYPE_GAS: 'Gasolina',
                FUEL_TYPE_NAT: 'Gas Natural',
                FUEL_TYPE_DIE: 'Diesel',
                MILEAGE_CITY: 'Ciudad',
                MILEAGE_HIGH: 'Autopista',
                MILEAGE_COMB: 'Conjunto'
            }
        });
    }

    setFrench(): void {
        this.translation.setTranslation('fr', {
            DETAILS: { HOME: 'Les détails du véhicule' },
            VEHICLES: {
                VEHICLE_ID: "Numéro d'inventaire",
                VEHICLE_MAKE: 'Fabricant',
                VEHICLE_MODEL: 'Modèle',
                VEHICLE_YEAR: 'Année',
                VEHICLE_CONFIGURATION: 'Garniture',
                VEHICLE_ENGINE_TYPE: 'Type de transmission',
                VEHICLE_WHEEL_SIZE: 'Taille de roue',
                VEHICLE_ALL_WHEEL_DRIVE: 'Toutes roues motrices',
                VEHICLE_FUEL_TYPE: 'Type de carburant',
                VEHICLE_MILEAGE: 'Kilométrage',
                VEHICLE_ODOMETER: 'Odomètre',
                TRANSMISSION_TYPE_AUTO: 'Automatique',
                TRANSMISSION_TYPE_MANU: 'Manuelle',
                AWD_TRUE: 'Vrai',
                AWD_FALSE: 'Faux',
                FUEL_TYPE_GAS: "De l'essence",
                FUEL_TYPE_NAT: 'Gaz naturel',
                FUEL_TYPE_DIE: 'Diesel',
                MILEAGE_CITY: 'Ville',
                MILEAGE_HIGH: 'Autoroute',
                MILEAGE_COMB: 'Combiné'
            }
        });
    }

    setItalian(): void {
        this.translation.setTranslation('it', {
            DETAILS: { HOME: 'Dettagli del veicolo' },
            VEHICLES: {
                VEHICLE_ID: 'Numero di inventario',
                VEHICLE_MAKE: 'Produttore',
                VEHICLE_MODEL: 'Modello',
                VEHICLE_YEAR: 'Anno',
                VEHICLE_CONFIGURATION: 'Ordinare',
                VEHICLE_ENGINE_TYPE: 'Tipo di trasmissione',
                VEHICLE_WHEEL_SIZE: 'Dimensioni della ruota',
                VEHICLE_ALL_WHEEL_DRIVE: 'Trazione integrale',
                VEHICLE_FUEL_TYPE: 'Tipo di carburante',
                VEHICLE_MILEAGE: 'Chilometraggio',
                VEHICLE_ODOMETER: 'Odometro',
                TRANSMISSION_TYPE_AUTO: 'Automatico',
                TRANSMISSION_TYPE_MANU: 'Manuale',
                AWD_TRUE: 'Vero',
                AWD_FALSE: 'Falso',
                FUEL_TYPE_GAS: 'Benzina',
                FUEL_TYPE_NAT: 'Gas naturale',
                FUEL_TYPE_DIE: 'Diesel',
                MILEAGE_CITY: 'Città',
                MILEAGE_HIGH: 'Autostrada',
                MILEAGE_COMB: 'Combinato'
            }
        });
    }

    setDutch(): void {
        this.translation.setTranslation('nl', {
            DETAILS: { HOME: 'Voertuig details' },
            VEHICLES: {
                VEHICLE_ID: 'Inventaris nummer',
                VEHICLE_MAKE: 'Fabrikant',
                VEHICLE_MODEL: 'Model',
                VEHICLE_YEAR: 'Jaar',
                VEHICLE_CONFIGURATION: 'Trimmen',
                VEHICLE_ENGINE_TYPE: 'Transmissietype',
                VEHICLE_WHEEL_SIZE: 'Wielgrootte',
                VEHICLE_ALL_WHEEL_DRIVE: 'Vierwielaandrijving',
                VEHICLE_FUEL_TYPE: 'Brandstoftype',
                VEHICLE_MILEAGE: 'Kilometerstand',
                VEHICLE_ODOMETER: 'Kilometerteller',
                TRANSMISSION_TYPE_AUTO: 'Automatisch',
                TRANSMISSION_TYPE_MANU: 'Handmatig',
                AWD_TRUE: 'Waar',
                AWD_FALSE: 'Niet waar',
                FUEL_TYPE_GAS: 'Benzine',
                FUEL_TYPE_NAT: 'Natuurlijk gas',
                FUEL_TYPE_DIE: 'Diesel',
                MILEAGE_CITY: 'Stad',
                MILEAGE_HIGH: 'Snelweg',
                MILEAGE_COMB: 'Gecombineerd'
            }
        });
    }

    setPortuguese(): void {
        this.translation.setTranslation('pt', {
            DETAILS: { HOME: 'Detalhes do veículo' },
            VEHICLES: {
                VEHICLE_ID: 'Número de inventário',
                VEHICLE_MAKE: 'Fabricante',
                VEHICLE_MODEL: 'Modelo',
                VEHICLE_YEAR: 'Ano',
                VEHICLE_CONFIGURATION: 'Aparar',
                VEHICLE_ENGINE_TYPE: 'Tipo de transmissão',
                VEHICLE_WHEEL_SIZE: 'Tamanho da roda',
                VEHICLE_ALL_WHEEL_DRIVE: 'Tudo Roda Dirigir',
                VEHICLE_FUEL_TYPE: 'Tipo de combustível',
                VEHICLE_MILEAGE: 'Quilometragem',
                VEHICLE_ODOMETER: 'Odômetro',
                TRANSMISSION_TYPE_AUTO: 'Automático',
                TRANSMISSION_TYPE_MANU: 'Manual',
                AWD_TRUE: 'Verdade',
                AWD_FALSE: 'Falso',
                FUEL_TYPE_GAS: 'Gasolina',
                FUEL_TYPE_NAT: 'Gás natural',
                FUEL_TYPE_DIE: 'Diesel',
                MILEAGE_CITY: 'Cidade',
                MILEAGE_HIGH: 'Rodovia',
                MILEAGE_COMB: 'Combinado'
            }
        });
    }

    ngOnDestroy() {
        this.subs.forEach((subscription) => subscription.unsubscribe());
    }
}
