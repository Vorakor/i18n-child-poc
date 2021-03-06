import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesModule } from '@child-poc/vehicles';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { InventoryComponent } from './components/inventory/inventory.component';
// import { I18nInventoryLoader } from './i18n-inventory-loader';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        VehiclesModule,
        RouterModule.forChild([{ path: '', pathMatch: 'full', component: InventoryComponent }]),
        TranslateModule
    ],
    declarations: [InventoryComponent],
    exports: [InventoryComponent],
    providers: [TranslatePipe]
})
export class InventoryModule {}
