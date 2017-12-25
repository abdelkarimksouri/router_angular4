import { Http } from '@angular/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

/**
 * Translate loader Factory
 *
 * @param {Http} http
 * @returns {TranslateHttpLoader}
 * @constructor
 */
export function TranslateLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}
