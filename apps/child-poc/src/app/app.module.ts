import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        RouterModule.forRoot([
            { path: '', pathMatch: 'full', loadChildren: () => import('@child-poc/inventory').then((module) => module.InventoryModule) }
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
