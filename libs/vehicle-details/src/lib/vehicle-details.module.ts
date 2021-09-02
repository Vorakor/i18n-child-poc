import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';
import { DetailsService } from './details.service';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild([{ path: '', pathMatch: 'full', component: DetailsComponent }]),
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
    declarations: [DetailsComponent],
    exports: [DetailsComponent],
    providers: [DetailsService]
})
export class VehicleDetailsModule {}
