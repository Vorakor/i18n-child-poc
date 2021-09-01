import { Location } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiclesService, IDetails } from '@child-poc/shared';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'vehicle-details-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
    public vehicle$: Observable<IDetails> = this.vService.selectedVehicle$.pipe(filter((v) => v !== undefined || v !== null));
    constructor(private router: Router, private vService: VehiclesService, private translation: TranslateService) {}

    ngOnInit(): void {
        this.translation.setTranslation('en', { DETAILS: { HOME: 'Vehicle Details' } });
        this.vService.selectedVehicle$.subscribe((v) => {
            console.log(v);
            if (v == null || v == undefined || Object.keys(v).length == 0) {
                this.router.navigate(['inventory']);
            }
        });
    }

    keyToString(key: string): string {
        switch (key) {
            case 'awd':
                return 'All Wheel Drive';
            case 'engineType':
                return 'Transmission Type';
            case 'fuelType':
                return 'Fuel';
            case 'vehicleId':
                return 'ID';
            case 'wheelSize':
                return 'Wheels';
            default:
                return key[0].toUpperCase() + key.slice(1);
        }
    }
}
