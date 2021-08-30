import { Location } from '@angular/common';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService, IDetails } from '@child-poc/shared';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'vehicle-details-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsComponent implements OnInit {
    public vehicle$: Observable<IDetails> = new Observable<IDetails>();
    constructor(private vService: VehiclesService) {}

    ngOnInit(): void {
        // this.vehicle$ = this.vService.getVehicle(Number(this.route.snapshot.paramMap.get('id')));
        // this.vehicle$.subscribe((car) => console.log(car));
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
