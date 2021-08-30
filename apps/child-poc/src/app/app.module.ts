import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

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
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
