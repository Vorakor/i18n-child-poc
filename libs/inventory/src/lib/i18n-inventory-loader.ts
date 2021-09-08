import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';

export class I18nInventoryLoader implements TranslateLoader {
    private _translationPath = './assets/inventory/i18n/';
    constructor(private http: HttpClient) {}
    getTranslation(lang: string): Observable<any> {
        return this.http.get(`${this._translationPath}${lang}.json`);
    }
}
