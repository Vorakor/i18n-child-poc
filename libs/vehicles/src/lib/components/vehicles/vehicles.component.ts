import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IDetails, VehiclesService } from '@child-poc/shared';
import { DetailsService } from '@child-poc/vehicle-details';
import { TranslateService } from '@ngx-translate/core';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'vehicles-vehicles',
    templateUrl: './vehicles.component.html',
    styleUrls: ['./vehicles.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehiclesComponent implements OnChanges {
    @Input() vehicles: IDetails[] | null = [];
    @Input() newVehicles: boolean = false;
    public cars: IDetails[] = [];
    constructor(private router: Router, private vService: VehiclesService, private trans: TranslateService, private detService: DetailsService) {}

    ngOnChanges(change: SimpleChanges): void {
        if (change['vehicles']) {
            this.cars = change['vehicles'].currentValue;
        }
    }

    goToDetails(event: any, vehicle: IDetails) {
        event.preventDefault();
        this.vService.setVehicle(vehicle.vehicleId);
        // this.detService.lazyLoadTranslations();
        // const detailsTranslation = this.trans
        //     .getTranslation(this.trans.currentLang ? this.trans.currentLang : this.trans.defaultLang)
        //     .pipe(distinctUntilChanged())
        //     .subscribe((trans) => {
        //         console.log(trans);
        //     });
        // this.detService.subs.push(detailsTranslation);
        // this.trans.setTranslation(this.trans.currentLang ? this.trans.currentLang : this.trans.defaultLang, this.detService.translations$, true);
        this.router.navigate(['vehicle-details']);
    }
}
