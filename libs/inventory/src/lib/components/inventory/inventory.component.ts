import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { InventoryService, IInventory, IDetails, VehiclesService } from '@child-poc/shared';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'inventory-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryComponent implements OnInit {
    public localInventory$: Observable<IInventory> = this.inventory.inventory$;
    public newInv$ = this.localInventory$.pipe(
        filter((inv) => inv !== null || inv !== undefined),
        map((inventory: IInventory) => {
            if (inventory.newVehicles && inventory.newVehicles !== null && inventory.newVehicles.length > 0) {
                return inventory.newVehicles;
            } else {
                return [] as IDetails[];
            }
        })
    );
    public usedInv$ = this.localInventory$.pipe(
        filter((inv) => inv !== null || inv !== undefined),
        map((inventory: IInventory) => {
            return inventory.usedVehicles;
        })
    );
    constructor(public inventory: InventoryService, private vService: VehiclesService) {
        // this.inventory.setDealership(1);
        this.vService.loadVehicles();
    }

    ngOnInit(): void {}
}
