import { Component, ChangeDetectionStrategy, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { IDetails, VehiclesService } from '@child-poc/shared';

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
    constructor(private router: Router, private vService: VehiclesService) {}

    ngOnChanges(change: SimpleChanges): void {
        if (change['vehicles']) {
            this.cars = change['vehicles'].currentValue;
        }
    }

    goToDetails(event: any, vehicle: IDetails) {
        event.preventDefault();
        this.vService.setVehicle(vehicle.vehicleId);
        this.router.navigate(['vehicle-details']);
    }
}
