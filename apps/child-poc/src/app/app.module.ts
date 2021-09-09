import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TranslateLoader, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MultiTranslateHttpLoader } from 'ngx-translate-multi-http-loader';
import { SharedModule, VehiclesService, InventoryService } from '@child-poc/shared';

export function HttpLoaderFactory(http: HttpClient) {
    return new MultiTranslateHttpLoader(http, [
        { prefix: './assets/i18n/', suffix: '.json' },
        { prefix: './assets/inventory/i18n/', suffix: '.json' },
        { prefix: './assets/vehicle-details/i18n/', suffix: '.json' }
    ]);
}

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            { path: '', pathMatch: 'full', redirectTo: 'inventory' },
            { path: 'inventory', pathMatch: 'full', loadChildren: () => import('@child-poc/inventory').then((module) => module.InventoryModule) },
            {
                path: 'vehicle-details',
                pathMatch: 'full',
                loadChildren: () => import('@child-poc/vehicle-details').then((module) => module.VehicleDetailsModule)
            }
        ]),
        SharedModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [VehiclesService, InventoryService, TranslatePipe],
    bootstrap: [AppComponent]
})
export class AppModule {}
