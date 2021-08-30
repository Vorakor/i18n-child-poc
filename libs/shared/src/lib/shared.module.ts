import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesService } from './vehicles.service';

@NgModule({
    imports: [CommonModule],
    providers: [VehiclesService]
})
export class SharedModule {}
