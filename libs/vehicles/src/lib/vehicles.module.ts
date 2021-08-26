import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

@NgModule({
    imports: [CommonModule, RouterModule.forChild([{ path: 'vehicles', pathMatch: 'full', component: VehiclesComponent }])],
    declarations: [VehiclesComponent],
    exports: [VehiclesComponent]
})
export class VehiclesModule {}
