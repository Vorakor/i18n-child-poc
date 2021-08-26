import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PurchaseInformationComponent } from './components/purchase-information/purchase-information.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
        ])
    ],
    declarations: [
      PurchaseInformationComponent
    ],
    exports: [
      PurchaseInformationComponent
    ]
})
export class VehicleModalModule {}
