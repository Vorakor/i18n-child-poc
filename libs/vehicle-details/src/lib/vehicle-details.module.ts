import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';

@NgModule({
    imports: [CommonModule, RouterModule.forChild([{ path: 'details/:vehicleId', pathMatch: 'full', component: DetailsComponent }])],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})
export class VehicleDetailsModule {}
