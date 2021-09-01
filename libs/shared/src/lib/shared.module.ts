import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesService } from './vehicles.service';
import { InventoryService } from './inventory.service';

@NgModule({
    imports: [CommonModule],
    providers: [VehiclesService, InventoryService]
})
export class SharedModule {}
