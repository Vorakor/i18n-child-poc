import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';
// import { DetailsService } from './details.service';
// import { I18nVehicleDetailsLoader } from './i18n-vehicle-details-loader';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forChild([{ path: '', pathMatch: 'full', component: DetailsComponent }]),
        TranslateModule.forChild({
            extend: true
            // defaultLanguage: 'en',
            // loader: {
            //     provide: TranslateLoader,
            //     useClass: I18nVehicleDetailsLoader,
            //     deps: [HttpClient]
            // }
        })
    ],
    declarations: [DetailsComponent],
    exports: [DetailsComponent],
    providers: [TranslatePipe]
})
export class VehicleDetailsModule {}
