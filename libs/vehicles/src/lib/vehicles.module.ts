import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { VehiclesComponent } from './components/vehicles/vehicles.component';

@NgModule({
    imports: [CommonModule, RouterModule.forChild([{ path: 'vehicles', pathMatch: 'full', component: VehiclesComponent }]), TranslateModule],
    declarations: [VehiclesComponent],
    exports: [VehiclesComponent]
})
export class VehiclesModule {}
