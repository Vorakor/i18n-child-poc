import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { InventoryService, IInventory, IDetails, VehiclesService } from '@child-poc/shared';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'inventory-inventory',
    templateUrl: './inventory.component.html',
    styleUrls: ['./inventory.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryComponent implements OnInit {
    public localInventory$: Observable<IInventory> = this.inventory.inventory$;
    public newInv$ = this.localInventory$.pipe(
        distinctUntilChanged(),
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
        distinctUntilChanged(),
        filter((inv) => inv !== null || inv !== undefined),
        map((inventory: IInventory) => {
            if (inventory.usedVehicles && inventory.usedVehicles !== null && inventory.usedVehicles.length > 0) {
                return inventory.usedVehicles;
            } else {
                return [] as IDetails[];
            }
        })
    );
    constructor(public inventory: InventoryService, private vService: VehiclesService) {
        // this.inventory.setDealership(2);
        this.vService.loadVehicles();
    }

    ngOnInit(): void {
        // this.localInventory$.subscribe((inventory) => console.log(inventory));
    }
}
