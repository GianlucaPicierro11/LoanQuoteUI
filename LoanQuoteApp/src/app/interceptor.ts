import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (request) {
            if (!request.headers.has('UID')) {
                request = request.clone({ headers: request.headers.set('UID', "testuid") });
            }

            if (!request.headers.has('ROLE')) {
                request = request.clone({ headers: request.headers.set('ROLE', "testruolo") });
            }
        }

        return next.handle(request).pipe();
    }
}