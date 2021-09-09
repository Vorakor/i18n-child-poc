import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { VehiclesService, IDetails } from '@child-poc/shared';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { DetailsService } from '../../details.service';

@Component({
    selector: 'vehicle-details-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
    public vehicle$: Observable<IDetails> = this.vService.selectedVehicle$.pipe(filter((v) => v !== undefined || v !== null));
    constructor(
        private router: Router,
        private vService: VehiclesService,
        private translation: TranslateService,
        private detailsService: DetailsService
    ) {}

    ngOnInit(): void {
        if (this.translation.currentLang == undefined) {
            this.translation.use('en');
        }
        // this.detailsService.setEnglish();
        // this.detailsService.getTranslations(this.translation.currentLang).subscribe((translations) => console.log(translations));
        // this.vService.selectedVehicle$.subscribe((v) => {
        //     if (v == null || v == undefined || Object.keys(v).length == 0) {
        //         this.router.navigate(['inventory']);
        //     }
        // });
    }

    keyToString(key: string): string {
        let returnValue: string = '';
        switch (key) {
            case 'awd':
                this.translation.get('VEHICLES.VEHICLE_ALL_WHEEL_DRIVE').subscribe((data) => {
                    returnValue = data;
                    return;
                });
                break;
            case 'configuration':
                this.translation.get('VEHICLES.VEHICLE_CONFIGURATION').subscribe((data) => {
                    returnValue = data;
                    return;
                });
                break;
            case 'engineType':
                this.translation.get('VEHICLES.VEHICLE_ENGINE_TYPE').subscribe((data) => {
                    returnValue = data;
                    return;
                });
                break;
            case 'fuelType':
                this.translation.get('VEHICLES.VEHICLE_FUEL_TYPE').subscribe((data) => {
                    returnValue = data;
                    return;
                });
                break;
            case 'make':
                this.translation.get('VEHICLES.VEHICLE_MAKE').subscribe((data) => {
                    returnValue = data;
                    return;
                });
                break;
            case 'mileage':
                this.translation.get('VEHICLES.VEHICLE_MILEAGE').subscribe((data) => {
                    returnValue = data;
                    return;
                });
                break;
            case 'model':
                this.translation.get('VEHICLES.VEHICLE_MODEL').subscribe((data) => {
                    returnValue = data;
                    return;
                });
                break;
            case 'odometer':
                this.translation.get('VEHICLES.VEHICLE_ODOMETER').subscribe((data) => {
                    returnValue = data;
                    return;
                });
                break;
            case 'vehicleId':
                this.translation.get('VEHICLES.VEHICLE_ID').subscribe((data) => {
                    returnValue = data;
                    return;
                });
                break;
            case 'wheelSize':
                this.translation.get('VEHICLES.VEHICLE_WHEEL_SIZE').subscribe((data) => {
                    returnValue = data;
                    return;
                });
                break;
            case 'year':
                this.translation.get('VEHICLES.VEHICLE_YEAR').subscribe((data) => {
                    returnValue = data;
                    return;
                });
                break;
        }
        return returnValue;
    }

    valueToString(key: string, value: string | number | boolean): string | number | boolean {
        let returnValue: any = null;
        switch (key) {
            case 'engineType':
                if (typeof value == 'string') {
                    if (value.toLowerCase() == 'automatic') {
                        this.translation.get('VEHICLES.TRANSMISSION_TYPE_AUTO').subscribe((data) => {
                            returnValue = data;
                            return;
                        });
                    } else {
                        this.translation.get('VEHICLES.TRANSMISSION_TYPE_MANU').subscribe((data) => {
                            returnValue = data;
                            return;
                        });
                    }
                }
                break;
            case 'fuelType':
                if (typeof value == 'string') {
                    if (value.toLowerCase() == 'gasoline') {
                        this.translation.get('VEHICLES.FUEL_TYPE_GAS').subscribe((data) => {
                            returnValue = data;
                            return;
                        });
                    } else if (value.toLowerCase() == 'natural gas') {
                        this.translation.get('VEHICLES.FUEL_TYPE_NAT').subscribe((data) => {
                            returnValue = data;
                            return;
                        });
                    } else {
                        this.translation.get('VEHICLES.FUEL_TYPE_DIE').subscribe((data) => {
                            returnValue = data;
                            return;
                        });
                    }
                }
                break;
            case 'mileage':
                if (typeof value == 'string') {
                    let [city, highway, combined] = value.split('/');
                    if (city.endsWith('ci')) {
                        city = city.substr(0, city.length - 2);
                        this.translation.get('VEHICLES.MILEAGE_CITY').subscribe((data: string) => {
                            city = city + ' ' + data;
                            return;
                        });
                    }
                    if (highway.endsWith('h')) {
                        highway = highway.substr(0, highway.length - 1);
                        this.translation.get('VEHICLES.MILEAGE_HIGH').subscribe((data: string) => {
                            highway = highway + ' ' + data;
                            return;
                        });
                    }
                    if (combined.endsWith('co')) {
                        combined = combined.substr(0, combined.length - 2);
                        this.translation.get('VEHICLES.MILEAGE_COMB').subscribe((data: string) => {
                            combined = combined + ' ' + data;
                            return;
                        });
                    }
                    returnValue = city + ' / ' + highway + ' / ' + combined;
                }
                break;
            default:
                returnValue = value;
        }
        return returnValue;
    }
}
