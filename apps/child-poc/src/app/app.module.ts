import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule, VehiclesService, InventoryService } from '@child-poc/shared';

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
                loadChildren: () => import('@child-poc/vehicle-details').then((module) => module.VehicleDetailsModule)
            }
        ]),
        SharedModule,
        TranslateModule.forRoot()
    ],
    providers: [VehiclesService, InventoryService],
    bootstrap: [AppComponent]
})
export class AppModule {}
