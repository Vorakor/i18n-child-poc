import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@child-poc/shared';
import { InventoryComponent } from './components/inventory/inventory.component';

@NgModule({
    imports: [CommonModule, SharedModule, RouterModule.forChild([{ path: '', pathMatch: 'full', component: InventoryComponent }])],
    declarations: [InventoryComponent],
    exports: [InventoryComponent]
})
export class InventoryModule {}
