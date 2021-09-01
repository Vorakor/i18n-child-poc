import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { VehiclesModule } from '@child-poc/vehicles';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { InventoryComponent } from './components/inventory/inventory.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        VehiclesModule,
        RouterModule.forChild([{ path: '', pathMatch: 'full', component: InventoryComponent }]),
        TranslateModule.forChild({
            extend: true,
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    declarations: [InventoryComponent],
    exports: [InventoryComponent],
    providers: [TranslatePipe]
})
export class InventoryModule {}
