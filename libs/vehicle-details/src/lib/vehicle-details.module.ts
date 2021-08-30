import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { SharedModule } from '@child-poc/shared';

@NgModule({
    imports: [CommonModule, SharedModule, RouterModule.forChild([{ path: '', pathMatch: 'full', component: DetailsComponent }])],
    declarations: [DetailsComponent],
    exports: [DetailsComponent]
})
export class VehicleDetailsModule {}
