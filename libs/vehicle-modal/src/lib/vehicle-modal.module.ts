import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseInformationComponent } from './components/purchase-information/purchase-information.component';

@NgModule({
    imports: [CommonModule],
    declarations: [PurchaseInformationComponent],
    exports: [PurchaseInformationComponent]
})
export class VehicleModalModule {}
