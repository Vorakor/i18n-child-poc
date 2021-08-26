import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InventoryComponent } from './components/inventory/inventory.component';

@NgModule({
    imports: [CommonModule, RouterModule.forChild([{ path: '', pathMatch: 'full', component: InventoryComponent }])],
    declarations: [InventoryComponent],
    exports: [InventoryComponent]
})
export class InventoryModule {}
